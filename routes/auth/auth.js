import { handleLogin, handleRegister } from '../../controllers/auth/auth.js';

export default router => {
  router.post('/api/auth/login', handleLogin);
  router.post('/api/auth/register', handleRegister);
};
