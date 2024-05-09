import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from '../../controllers/category/category.js';
import { verifyJWT } from '../../middlewares/verifyJWT.js';

export default router => {
  router.post('/api/categories', verifyJWT, createCategory);
  router.get('/api/categories', getCategory);
  router.get('/api/categories/:id', verifyJWT, getCategoryById);
  router.put('/api/categories/:id', verifyJWT, updateCategory);
  router.delete('/api/categories/:id', verifyJWT, deleteCategory);
};
