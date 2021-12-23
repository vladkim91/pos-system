const { Schema } = require('mongoose');

const Products = new Schema(
  {
    name: { type: String, required: true },
    mods: { type: Array, required: true },

    category_id: { type: Schema.Types.ObjectId, ref: 'categories' },
    quantity: { type: Number, required: true },
    salePrice: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = Products;
