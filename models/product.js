import { DataTypes, Sequelize } from 'sequelize';
import { db } from '../connect.js';
import Category from './category.js';
import SubCategory from './subCategory.js';

const Product = db.define(
  'product',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    sub_category_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsTo(SubCategory, {
  foreignKey: 'sub_category_id',
});

Product.sync({
  alter: true,
}).then(() => {
  console.log('Product table created');
});

export default Product;
