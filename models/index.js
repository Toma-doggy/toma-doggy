const User = require('./User');
const Dog = require('./Dog');
const Item = require('./Item');
const UserDog = require('./UserDog');
<<<<<<< HEAD
const DogItem = require('DogItem');
=======
const DogItem = require('./DogItem');
>>>>>>> dev

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
<<<<<<< HEAD
    foreignKey: 'dogitem_id'
=======
    foreignKey: 'dogitem_id',

>>>>>>> dev
  });

module.exports = { User, UserDog, DogItem };