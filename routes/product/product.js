import { ROLE_LIST } from '../../config/role_list.js';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../../controllers/product/product.js';
import { verifyJWT } from '../../middlewares/verifyJWT.js';

export default router => {
  router.post('/api/products', verifyJWT, createProduct);
  router.get('/api/products', getProducts);
  router.get('/api/products/:id', getProductById);
  router.put('/api/products/:id', verifyJWT, updateProduct);
  router.delete('/api/products/:id', verifyJWT, deleteProduct);
};
