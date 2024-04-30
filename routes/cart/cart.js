import {
  clearCart,
  createCart,
  deleteCart,
  getCartByUserId,
  updateCart,
} from '../../controllers/cart/cart.js';

export default router => {
  router.post('/api/cart', createCart);
  router.put('/api/cart/:id', updateCart);
  router.delete('/api/cart/:id', deleteCart);
  router.delete('/api/cart', clearCart);
  router.get('/api/cart/user/:user_id', getCartByUserId);
};
