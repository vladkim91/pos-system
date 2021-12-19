const { Product, Category } = require('../models');

const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.status(201).json({
      category
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(201).json({
      product
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: `${req.params.id}` });
    return res.status(201).json({
      product
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getAllProducts,
  getProductById
};
