'use strict';

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

let port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

mongoose.connect(`mongodb://localhost/users`, (err) => {
  if (err) return console.log('error to connect database',err);

  app.listen(port, () => {
    console.log(`server running and listening in http://localhost${port}`);
  });
});
