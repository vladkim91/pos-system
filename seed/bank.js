const db = require('../db');
const { Bank } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const bank = [
    {
      orders: []
    }
  ];

  await Bank.insertMany(bank);
  console.log('Bank added to MongoDB');
};

const run = async () => {
  await main();
  db.close();
};

run();
