import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import { connect, db } from './connect.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connect();

    app.use(
      cors({
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        preflightContinue: true,
      })
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use('/', router());

    app.listen(PORT, () => {
      console.log('🚀 - Server is running on PORT:', PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

void start();
