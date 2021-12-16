const mongoose = require('mongoose');

const CategoriesSchema = require('./categories');
const ProductsSchema = require('./products');

const Categories = mongoose.model('categories', CategoriesSchema);
const Products = mongoose.model('products', ProductsSchema);

module.exports = {
  Categories,
  Products
};
