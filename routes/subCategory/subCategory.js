import { ROLE_LIST } from '../../config/role_list.js';
import {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategoryById,
  updateSubCategory,
} from '../../controllers/subCategory/subCategory.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.post(
    '/api/sub-categories',
    verifyRoles(ROLE_LIST.USER, ROLE_LIST.GUEST),
    createSubCategory
  );
  router.get(
    '/api/sub-categories',
    verifyRoles(ROLE_LIST.USER, ROLE_LIST.GUEST),
    getSubCategory
  );
  router.get('/api/sub-categories/:id', getSubCategoryById);
  router.put('/api/sub-categories/:id', updateSubCategory);
  router.delete(
    '/api/sub-categories/:id',
    verifyRoles(ROLE_LIST.USER, ROLE_LIST.GUEST),
    deleteSubCategory
  );
};
