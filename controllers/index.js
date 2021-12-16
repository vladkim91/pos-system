const { Product, Category } = require('../models');

const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find({});
    return res.stats(201).json({
      category
    })
  }
}
