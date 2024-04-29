import { DataTypes, Sequelize } from 'sequelize';
import { db } from '../connect.js';

const Table = db.define(
  'table',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    table_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qr_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isOccupied: {
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
  },
  {
    timestamps: true,
  }
);

Table.sync({
  alter: true,
}).then(() => {
  console.log('Table table created');
});

export default Table;
