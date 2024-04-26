import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const URL = process.env.POSTGRES_URL;

if (!URL) {
  console.error('Postgres URL is not provided in environment variables.');
  process.exit(1);
}

export const db = new Sequelize({
  dialect: 'postgres',
  logging: false,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: pg,
});

export const connect = async () => {
  try {
    console.log('Connecting to the database...');

    await db.authenticate();
    console.log('Connection has been established successfully.');

    await db.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    db.options.logging = console.log;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};
