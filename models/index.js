const User = require('./User');
const Dog = require('./Dog');
const Item = require('./Item');
const UserDog = require('./UserDog');
const DogItem = require('./DogItem');

User.hasMany(UserDog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserDog.belongsTo(User, {
  foreignKey: 'user_id'
});

UserDog.hasMany(DogItem, {
    foreignKey: 'dogitem_id',
    onDelete: 'CASCADE'
  });
  
DogItem.belongsTo(UserDog, {
    foreignKey: 'dogitem_id',

  });

  Dog.hasMany(UserDog, {
    foreignKey: 'dog_id',
    onDelete: 'CASCADE'
  });
  
  UserDog.belongsTo(Dog, {
    foreignKey: 'dog_id',

  });

module.exports = { User, UserDog, DogItem, Dog, Item };