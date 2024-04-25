import { DataTypes, Sequelize } from 'sequelize';
import { db } from '../connect.js';
import SubCategory from './subCategory.js';

const Category = db.define('category', {
  id: {
    type: Sequelize.UUID,
    // autoIncrement: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
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
});

Category.hasMany(SubCategory, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
SubCategory.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.sync({
  alter: true,
}).then(() => {
  console.log('Category table created');
});

export default Category;
