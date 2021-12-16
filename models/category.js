const { Schema } = require('mongoose');

const Categories = new Schema(
  {
    name: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = Categories;
