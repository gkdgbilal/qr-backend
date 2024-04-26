import { ROLE_LIST } from '../../config/role_list.js';
import { getUsers } from '../../controllers/user/user.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.get('/api/users', verifyRoles(ROLE_LIST.ADMIN), getUsers);
};
