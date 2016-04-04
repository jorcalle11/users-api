'use strict';

import cloudinary from 'cloudinary';
import config from './index';

cloudinary.config({
  cloudName: config.cloudinary.cloudName,
  apiKey: config.cloudinary.apiKey,
  apiSecret: config.cloudinary.apiSecret
});

export default cloudinary;
