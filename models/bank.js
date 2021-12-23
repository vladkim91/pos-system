const { Schema } = require('mongoose');

const Bank = new Schema(
  {
    orders: { type: Array },
    totalSales: { type: Number }
  },
  { timestamps: true }
);

module.exports = Bank;
