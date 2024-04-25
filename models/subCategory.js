import { DataTypes, Sequelize } from 'sequelize';
import { db } from '../connect.js';

const SubCategory = db.define('sub_category', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1,
  },
  sub_category_name: {
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

SubCategory.sync({
  alter: true,
}).then(() => {
  console.log('SubCategory table created');
});

export default SubCategory;
