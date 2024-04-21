import { getMenu } from '../../controllers/menu/menu.js';

export default router => {
  router.get('/', async (req, res) => {
    res.send('This method is not allowed.');
  });
  router.get('/api/menus', getMenu);
};
