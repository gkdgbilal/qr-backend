import { ROLE_LIST } from '../../config/role_list.js';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../../controllers/product/product.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.post('/api/products', createProduct);
  router.get(
    '/api/products',
    verifyRoles(ROLE_LIST.USER, ROLE_LIST.GUEST),
    getProducts
  );
  router.get('/api/products/:id', getProductById);
  router.put('/api/products/:id', updateProduct);
  router.delete('/api/products/:id', deleteProduct);
};
