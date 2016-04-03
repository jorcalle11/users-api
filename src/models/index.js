'use strict';

import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let User = new Schema({
  name: {
    first : String,
    last: String
  },
  age: Number,
  email: {
    type :String,
    unique: true
  },
  ocupation: String,
  biography: String,
  image: {
    publicId: String,
    url: String
  }
});

export default mongoose.model('User',User);
