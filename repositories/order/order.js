import Order from '../../models/order.js';

export const createOrderRow = async values => {
  return await Order.create(values);
};

export const getOrderRow = async () => {
  return await Order.findAll({
    order: [['order_number', 'ASC']],
  });
};

export const getOrderRowById = async id => {
  return await Order.findOne({ where: { id } });
};

export const updateOrderRow = async (values, id) => {
  await Order.update(values, { where: { id } });
  return await Order.findOne({ where: { id } });
};

export const deleteOrderRow = async id => {
  return await Order.destroy({ where: { id } });
};

export const getOrderRowByOrderNumber = async order_number => {
  return await Order.findOne({ where: { order_number } });
};
