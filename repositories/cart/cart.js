import Cart from '../../models/cart.js';

export const createCartRow = async values => {
  return await Cart.create(values);
};

export const getCartRow = async () => {
  return await Cart.findAll({
    order: [['createdAt', 'ASC']],
  });
};

export const getCartRowById = async id => {
  return await Cart.findOne({ where: { id } });
};

export const updateCartRow = async (values, id) => {
  await Cart.update(values, { where: { id } });
  return await Cart.findOne({ where: { id } });
};

export const deleteCartRow = async id => {
  return await Cart.destroy({ where: { id } });
};

export const clearCartRow = async () => {
  return await Cart.destroy({ where: {} });
};

export const getCartRowByUserId = async user_id => {
  return await Cart.findAll({ where: { user_id } });
};
