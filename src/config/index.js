'use strict';

export default {
  port : process.env.PORT || 3000,
	env: process.env.ENV || 'dev',
	dbDev: 'mongodb://localhost/users',
	dbProduction : {
    name: process.env.NAME,
    user: process.env.USER,
    password: process.env.PASSWORD
  },
  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
  }
};
