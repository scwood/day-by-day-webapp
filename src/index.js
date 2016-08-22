import bodyParser from 'body-parser';
import express from 'express';
import mailNotifier from 'mail-notifier';
import mailstrip from 'mailstrip';
import mongoose from 'mongoose';
import path from 'path';

import config from './config';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send({ error: 'Internal server error. Please try again later.' });
});

if (!module.parent) {
  const port = process.env.PORT || 80;
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongo);
  // mailNotifier(config.mailNotifier).on('mail', mail => mailstrip.body(mail)).start();
  app.listen(port);
}

export default app;
