import {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategoryById,
  updateSubCategory,
} from '../../controllers/subCategory/subCategory.js';

export default router => {
  router.post('/api/sub-categories', createSubCategory);
  router.get('/api/sub-categories', getSubCategory);
  router.get('/api/sub-categories/:id', getSubCategoryById);
  router.put('/api/sub-categories/:id', updateSubCategory);
  router.delete('/api/sub-categories/:id', deleteSubCategory);
};
