import { ARRAY, DataTypes } from 'sequelize';
import { db } from '../connect.js';

const Order = db.define('order', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  order_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  total_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  menu_item: {
    type: ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  table_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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

Order.sync({
  alter: true,
}).then(() => {
  console.log('Order table created');
});

export default Order;
