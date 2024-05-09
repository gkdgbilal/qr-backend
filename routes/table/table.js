import { ROLE_LIST } from '../../config/role_list.js';
import {
  createTable,
  deleteTable,
  getTableById,
  getTables,
  updateTable,
} from '../../controllers/table/table.js';
import { verifyJWT } from '../../middlewares/verifyJWT.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.post('/api/tables', verifyRoles(ROLE_LIST.ADMIN), createTable);
  router.get('/api/tables', getTables);
  router.get('/api/tables/:id', verifyJWT, getTableById);
  router.put('/api/tables/:id', verifyJWT, updateTable);
  router.delete('/api/tables/:id', verifyJWT, deleteTable);
};
