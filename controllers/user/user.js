import { ROLE_LIST } from '../../config/role_list.js';
import {
  createUserRow,
  getUserRow,
  getUserRowByUsername,
} from '../../repositories/user/user.js';

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: 'Username and password are required.' });

    const duplicate = await getUserRowByUsername(username);
    if (duplicate)
      return res.status(409).json({ message: 'Username already exists.' }); // 409 Conflict

    try {
      const hashedPwd = await bcrypt.hash(password, 10);

      const newUser = {
        username,
        password: hashedPwd,
        roles: [ROLE_LIST.USER],
      };

      const user = await createUserRow(newUser);

      res.status(201).json(user);
    } catch (error) {}
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getUserRow();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
