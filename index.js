import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import { connect, db } from './connect.js';
import dotenv from 'dotenv';
import { logger } from './middlewares/logEvents.js';
import { corsOptions } from './config/corsOptions.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { verifyJWT } from './middlewares/verifyJWT.js';
import session from 'express-session';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connect();

    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24,
          sameSite: 'none',
          secure: true,
        },
      })
    );

    app.use(logger);

    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());

    app.use('/', router());

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log('🚀 - Server is running on PORT:', PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

void start();
