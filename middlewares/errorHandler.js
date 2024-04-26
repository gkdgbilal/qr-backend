import { logEvents } from './logEvents.js';

export const errorHandler = async (err, req, res, next) => {
  logEvents(`${err.message}: ${err.message}`, 'error');
  console.log(err.stack);
  res.status(500).send(err.message);
};
