import User from '../../models/user.js';

export const createUserRow = async values => {
  return await User.create(values);
};

export const getUserRow = async () => {
  return await User.findAll({
    order: [['id', 'ASC']],
  });
};

export const getUserRowById = async id => {
  return await User.findOne({ where: { id } });
};

export const updateUserRow = async (values, id) => {
  await User.update(values, { where: { id } });
  return await User.findOne({ where: { id } });
};

export const deleteUserRow = async id => {
  return await User.destroy({ where: { id } });
};

export const getUserRowByUsername = async username => {
  return await User.findOne({ where: { username } });
};

export const getUserRowByUserToken = async refreshToken => {
  return await User.findOne({ where: { refreshToken } });
};
