const sequelize = require('../config/connection');
const { User, Dog, Item } = require('../models');

const userData = require('./userData.json');
const dogData = require('./dogData.json');
const itemData = require('./itemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const dog of dogData) {
    await Dog.create({
      ...dog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const item of itemData) {
    await Item.create({
      ...item,
      item_id: items[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();