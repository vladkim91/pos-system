const mongoose = require('mongoose');
const CategorySchema = require('./category');
const ProductSchema = require('./product');

const Category = mongoose.model('categories', CategorySchema);
const Product = mongoose.model('products', ProductSchema);

module.exports = {
  Category,
  Product
};
