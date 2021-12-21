const mongoose = require('mongoose');
const CategorySchema = require('./category');
const ProductSchema = require('./product');
const BankSchema = require('./bank');

const Category = mongoose.model('categories', CategorySchema);
const Product = mongoose.model('products', ProductSchema);
const Bank = mongoose.model('bank', BankSchema);

module.exports = {
  Category,
  Product,
  Bank
};
