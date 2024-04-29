import { ROLE_LIST } from '../../config/role_list.js';
import {
  createUserRow,
  getUserRowByUserToken,
  getUserRowByUsername,
  updateUserRow,
} from '../../repositories/user/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401);

  const refreshToken = cookies.jwt;

  const foundUser = await getUserRowByUserToken(refreshToken);
  if (!foundUser) return res.status(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);
    const roles = Object.values(foundUser.roles);
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    );
    res.json({ accessToken });
  });
};

export const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  const foundUser = await getUserRowByUsername(username);
  if (!foundUser.dataValues) return res.status(401);

  const match = await bcrypt.compare(password, foundUser.dataValues.password);

  if (!match) return res.status(401);

  const roles = Object.values(foundUser.dataValues.roles);

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '300s' }
  );

  const refreshToken = jwt.sign(
    {
      username: foundUser.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  const currentUser = { ...foundUser, refreshToken };
  await updateUserRow(currentUser, foundUser.id);

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({
    accessToken,
    roles,
    username: foundUser.username,
    id: foundUser.id,
    refreshToken,
  });
};

export const handleRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: 'Username and password are required.' });

    const duplicate = await getUserRowByUsername(username);
    if (duplicate)
      return res.status(409).json({ message: 'Username already exists.' }); // 409 Conflict

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPwd,
      roles: [ROLE_LIST.USER],
    };

    const user = await createUserRow(newUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
