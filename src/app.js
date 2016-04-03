'use strict';

import express from 'express';
import morgan from 'morgan';

let port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('hello express!!!');
});

app.listen(port, () => {
  console.log(`server running and listening in http://localhost${port}`);
});
