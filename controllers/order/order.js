import Order from '../../models/order.js';
import {
  createOrderRow,
  deleteOrderRow,
  getOrderRow,
  getOrderRowById,
  getOrderRowByOrderNumber,
  updateOrderRow,
} from '../../repositories/order/order.js';

export const createOrder = async (req, res) => {
  try {
    const data = req.body;

    const lastOrder = await Order.findOne({
      order: [['createdAt', 'DESC']],
    });

    let orderNumber;
    if (lastOrder) {
      const lastOrderNumber = parseInt(
        lastOrder.order_number.replace('ORD-', ''),
        10
      );
      orderNumber = `ORD-${(lastOrderNumber + 1).toString().padStart(10, '0')}`;
    } else {
      orderNumber = 'ORD-0000000001';
    }

    const isOrderExist = await getOrderRowByOrderNumber(orderNumber);

    if (isOrderExist) {
      throw new Error('Order already exists');
    }

    const orderData = {
      ...data,
      order_number: orderNumber,
    };

    const order = await createOrderRow(orderData);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await getOrderRow();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await getOrderRowById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const isOrderExist = await getOrderRowById(id);

    if (!isOrderExist) {
      throw new Error('Order does not exist');
    }

    const data = req.body;
    const order = await updateOrderRow(data, id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await getOrderRowById(id);

    if (!order) {
      throw new Error('Order does not exist');
    }

    await deleteOrderRow(id);
    res.status(200).json({ msg: 'Order deleted successfully' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
