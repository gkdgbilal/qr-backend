import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
} from '../../controllers/order/order.js';

export default router => {
  router.post('/api/orders', createOrder);
  router.get('/api/orders', getOrders);
  router.get('/api/orders/:id', getOrderById);
  router.put('/api/orders/:id', updateOrder);
  router.delete('/api/orders/:id', deleteOrder);
};
