import express from 'express';
import menuRouter from './menu/menu.js';
import categoryRouter from './category/category.js';
import subCategoryRouter from './subCategory/subCategory.js';
import authRouter from './auth/auth.js';
import userRouter from './user/user.js';
import productRouter from './product/product.js';
import tableRouter from './table/table.js';
import orderRouter from './order/order.js';
import cartRouter from './cart/cart.js';

const router = express.Router();

export default () => {
  menuRouter(router);
  categoryRouter(router);
  subCategoryRouter(router);
  authRouter(router);
  userRouter(router);
  productRouter(router);
  tableRouter(router);
  orderRouter(router);
  cartRouter(router);

  return router;
};
