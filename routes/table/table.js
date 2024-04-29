import { ROLE_LIST } from '../../config/role_list.js';
import {
  createTable,
  deleteTable,
  getTableById,
  getTables,
  updateTable,
} from '../../controllers/table/table.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.post('/api/tables', verifyRoles(ROLE_LIST.ADMIN), createTable);
  router.get('/api/tables', getTables);
  router.get('/api/tables/:id', getTableById);
  router.put('/api/tables/:id', updateTable);
  router.delete('/api/tables/:id', deleteTable);
};
