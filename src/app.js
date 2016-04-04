'use strict';

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import routes from './routes';

let url = config.dbDev;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

if (config.env === 'prod') {
  url = `mongodb://${config.dbProduction.user}:${config.dbProduction.password}@ds015700.mlab.com:15700/${config.dbProduction.name}`;
}

mongoose.connect(url, (err) => {
  if (err) return console.log('error to connect database',err);

  app.listen(config.port, () => {
    console.log(`Enviroment: ${config.env}`);
    console.log(`server running and listening in http://localhost${config.port}`);
  });
});
