const { Schema } = require('mongoose');

const Bank = new Schema(
  {
    orders: { type: Array }
  },
  { timestamps: true }
);

module.exports = Bank;
