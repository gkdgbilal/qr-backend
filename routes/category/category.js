import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from '../../controllers/category/category.js';

export default router => {
  router.post('/api/categories', createCategory);
  router.get('/api/categories', getCategory);
  router.get('/api/categories/:id', getCategoryById);
  router.put('/api/categories/:id', updateCategory);
  router.delete('/api/categories/:id', deleteCategory);
};
