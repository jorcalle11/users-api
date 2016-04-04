'use strict';

export default {
  port : process.env.PORT || 3000,
	env: process.env.ENV || 'dev',
	dbDev: 'mongodb://localhost/users',
	dbProduction : {
    name: process.env.NAME,
    user: process.env.USER,
    password: process.env.PASSWORD
  }
};
