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
      name: "Tito's",
      mods: ['up', 'rocks'],
      category_id: liquor[0]._id,
      quantity: 10,
      salePrice: 9
    },
    {
      name: 'Jack Daniels',
      mods: ['up', 'rocks'],

      category_id: liquor[0]._id,
      quantity: 15,
      salePrice: 10
    },
    {
      name: 'Jameson',
      mods: ['up', 'rocks'],

      category_id: liquor[0]._id,
      quantity: 25,
      salePrice: 10
    },
    {
      name: 'Bombay',
      mods: ['up', 'rocks'],

      category_id: liquor[0]._id,
      quantity: 15,
      salePrice: 10
    },
    {
      name: 'Bacardi',
      mods: ['up', 'rocks'],

      category_id: liquor[0]._id,
      quantity: 15,
      salePrice: 10
    },
    {
      name: 'Heineken',
      mods: [],

      category_id: beer[0]._id,
      quantity: 90,
      salePrice: 5
    },
    {
      name: 'Blue Moon',
      mods: [],

      category_id: beer[0]._id,
      quantity: 70,
      salePrice: 5
    },
    {
      name: 'Bud Light',
      mods: [],

      category_id: beer[0]._id,
      quantity: 65,
      salePrice: 5
    },
    {
      name: 'Coors',
      mods: [],

      category_id: beer[0]._id,
      quantity: 78,
      salePrice: 7
    },
    {
      name: 'Pinot Noir',
      mods: [],

      category_id: wine[0]._id,
      quantity: 12,
      salePrice: 12
    },
    {
      name: 'Cabernet',
      mods: [],

      category_id: wine[0]._id,
      quantity: 8,
      salePrice: 12
    },
    {
      name: 'Merlot',
      mods: [],

      category_id: wine[0]._id,
      quantity: 13,
      salePrice: 12
    },
    {
      name: 'Pinot Grigio',
      mods: [],

      category_id: wine[0]._id,
      quantity: 41,
      salePrice: 12
    },
    {
      name: 'Sauv Blanc',
      mods: [],

      category_id: wine[0]._id,
      quantity: 49,
      salePrice: 10
    },
    {
      name: 'Coke',
      mods: ['diet', 'regular'],

      category_id: na[0]._id,
      quantity: 80,
      salePrice: 2
    },
    {
      name: 'Sprite',
      mods: [],

      category_id: na[0]._id,
      quantity: 22,
      salePrice: 2
    },
    {
      name: 'Ginger Ale',
      mods: [],

      category_id: na[0]._id,
      quantity: 32,
      salePrice: 2
    },
    {
      name: 'Rootbeer',
      mods: [],

      category_id: na[0]._id,
      quantity: 45,
      salePrice: 2
    },
    {
      name: 'Chicken wings',
      mods: ['hot', 'mild'],

      category_id: starters[0]._id,
      quantity: 25,
      salePrice: 12
    },
    {
      name: 'Onion rings',
      mods: [],

      category_id: starters[0]._id,
      quantity: 30,
      salePrice: 12
    },
    {
      name: 'Truffle fries',
      mods: [],

      category_id: starters[0]._id,
      quantity: 20,
      salePrice: 12
    },
    {
      name: 'Spinach dip',
      mods: [],

      category_id: starters[0]._id,
      quantity: 40,
      salePrice: 8
    },
    {
      name: 'Burger',
      mods: ['rare', 'medium rare', 'medium', 'medium well', 'well done'],

      category_id: entrees[0]._id,
      quantity: 25,
      salePrice: 16
    },
    {
      name: 'Fish and Chips',
      mods: [],

      category_id: entrees[0]._id,
      quantity: 35,
      salePrice: 16
    },
    {
      name: 'Pastrami Sand',
      mods: ['fries', 'chips'],

      category_id: entrees[0]._id,
      quantity: 25,
      salePrice: 16
    },
    {
      name: 'Meatloaf',
      mods: [],

      category_id: entrees[0]._id,
      quantity: 30,
      salePrice: 18
    },
    {
      name: 'Lobster Roll',
      mods: ['hot', 'cold'],

      category_id: entrees[0]._id,
      quantity: 50,
      salePrice: 18
    },
    {
      name: 'Cheesecake',
      mods: [],

      category_id: dessert[0]._id,
      quantity: 20,
      salePrice: 9
    },
    {
      name: 'Keylime Pie',
      mods: [],

      category_id: dessert[0]._id,
      quantity: 15,
      salePrice: 10
    },

    {
      name: 'Lava cake',
      mods: [],

      category_id: dessert[0]._id,
      quantity: 25,
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
