const sequelize = require('../config/connection');
const  User = require('../models/User.js');
const Dog = require('../models/Dog.js');
const Item = require('../models/Item.js');
const userData = require('./userData.json');
const dogData = require('./dogData.json');
const itemData = require('./itemData.json');

const seedDatabase = async () => {
  // could not delete table because of foreign key constraint found solution at https://stackoverflow.com/questions/17822663/sequelize-drop-table-in-wrong-order
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.sync({ force: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const dogs = await Dog.bulkCreate(dogData, {
    individualHooks: true,
    returning: true,
  });
  const items = await Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  })


  process.exit(0);
};

seedDatabase();