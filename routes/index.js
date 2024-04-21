import express from 'express';
import menuRouter from './menu/menu.js';

const router = express.Router();

export default () => {
  menuRouter(router);

  return router;
};
