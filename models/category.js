const { Schema } = require('mongoose');

const Categories = new Schema(
  {
    quantity: { type: Number, required: true },
    cost: { type: Number, required: true },
    salePrice: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = {
  Categories
};
