const db = require('../db');
const { Category } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const categories = [
    {
      name: 'Liquor'
    },
    {
      name: 'Beer'
    },
    {
      name: 'Wine'
    },
    {
      name: 'Na'
    },
    {
      name: 'Starters'
    },
    {
      name: 'Entrees'
    },
    {
      name: 'Dessert'
    }
  ];

  await Category.insertMany(categories);
  console.log('Categories added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
