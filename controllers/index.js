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

const addProduct = async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();

    return res.status(201).json({
      product
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Product deleted');
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, product) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!product) {
          res.status(500).send('Product not found!');
        }
        return res.status(200).json(product);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCategories,
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
};
