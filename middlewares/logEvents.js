import { format } from 'date-fns';

export const logEvents = async (message, type = 'info') => {
  const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log(`${date} - ${type.toUpperCase()} - ${message}`);
};

export const logger = (req, res, next) => {
  logEvents(`${req.method} - ${req.url}`);
  next();
};
