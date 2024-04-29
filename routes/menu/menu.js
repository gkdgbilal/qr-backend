import { ROLE_LIST } from '../../config/role_list.js';
import { getMenu } from '../../controllers/menu/menu.js';
import { verifyRoles } from '../../middlewares/verifyRoles.js';

export default router => {
  router.get('/', async (req, res) => {
    res.send(`
      <h1>Welcome to the Digital QR Menu API</h1>
    `);
  });
  router.get('/api/menu', getMenu);
};
