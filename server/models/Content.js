const { Schema, model } = require('mongoose');

const contentSchema = new Schema(
  {
    id: {
      type: Number,
      // required: true
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    }
  }
);

module.exports = contentSchema;