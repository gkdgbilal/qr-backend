import express from 'express';
import menuRouter from './menu/menu.js';
import categoryRouter from './category/category.js';
import subCategoryRouter from './subCategory/subCategory.js';

const router = express.Router();

export default () => {
  menuRouter(router);
  categoryRouter(router);
  subCategoryRouter(router);

  return router;
};
