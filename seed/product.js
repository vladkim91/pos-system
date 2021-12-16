const db = require('../db');
const { Category, Product } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const liquor = await Category.find({ name: 'Liquor' });
  const beer = await Category.find({ name: 'Beer' });
  const wine = await Category.find({ name: 'Wine' });
  const na = await Category.find({ name: 'Na' });
  const starters = await Category.find({ name: 'Starters' });
  const entrees = await Category.find({ name: 'Entrees' });
  const dessert = await Category.find({ name: 'Dessert' });

  const products = [
    {
      name: 'Vodka',
      mods: ['up', 'rocks', 'double'],
      cost: 2,
      availability: true,
      category_id: liquor[0]._id,
      quantity: 10,
      salePrice: 9
    },
    {
      name: 'Whiskey',
      mods: ['up', 'rocks', 'double'],
      cost: 2,
      availability: true,
      category_id: liquor[0]._id,
      quantity: 12,
      salePrice: 10
    },
    {
      name: 'Lager',
      mods: [],
      cost: 0.5,
      availability: true,
      category_id: beer[0]._id,
      quantity: 90,
      salePrice: 5
    },
    {
      name: 'Ale',
      mods: [],
      cost: 0.6,
      availability: true,
      category_id: beer[0]._id,
      quantity: 45,
      salePrice: 7
    },
    {
      name: 'Red',
      mods: [],
      cost: 5,
      availability: true,
      category_id: wine[0]._id,
      quantity: 8,
      salePrice: 12
    },
    {
      name: 'White',
      mods: [],
      cost: 4,
      availability: true,
      category_id: wine[0]._id,
      quantity: 5,
      salePrice: 10
    },
    {
      name: 'Coke',
      mods: ['diet', 'regular'],
      cost: 0.2,
      availability: true,
      category_id: na[0]._id,
      quantity: 80,
      salePrice: 2
    },
    {
      name: 'Sprite',
      mods: [],
      cost: 0.2,
      availability: true,
      category_id: na[0]._id,
      quantity: 90,
      salePrice: 2
    },
    {
      name: 'Chicken wings',
      mods: ['hot', 'mild'],
      cost: 2,
      availability: true,
      category_id: starters[0]._id,
      quantity: 30,
      salePrice: 12
    },
    {
      name: 'Spinach dip',
      mods: [],
      cost: 1.5,
      availability: true,
      category_id: starters[0]._id,
      quantity: 40,
      salePrice: 8
    },
    {
      name: 'Burger',
      mods: ['rare', 'medium rare', 'medium', 'medium well', 'well done'],
      cost: 5,
      availability: true,
      category_id: entrees[0]._id,
      quantity: 25,
      salePrice: 16
    },
    {
      name: 'Meatloaf',
      mods: [],
      cost: 4,
      availability: true,
      category_id: entrees[0]._id,
      quantity: 30,
      salePrice: 18
    },
    {
      name: 'Cheesecake',
      mods: [],
      cost: 3,
      availability: true,
      category_id: dessert[0]._id,
      quantity: 20,
      salePrice: 9
    },
    {
      name: 'Red velvet cake',
      mods: [],
      cost: 4,
      availability: true,
      category_id: dessert[0]._id,
      quantity: 15,
      salePrice: 10
    }
  ];

  await Product.insertMany(products);
  console.log('Products added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
