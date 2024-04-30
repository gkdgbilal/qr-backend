import { DataTypes } from 'sequelize';
import { db } from '../connect.js';
import User from './user.js';
import Table from './table.js';

const Cart = db.define('cart', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  table_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  menu_item: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL,
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

Cart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Cart.belongsTo(Table, {
  foreignKey: 'table_id',
  onDelete: 'CASCADE',
});

Cart.sync({
  alter: true,
}).then(() => {
  console.log('Cart table created');
});

export default Cart;
