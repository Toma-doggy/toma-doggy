const User = require('./User');
const Project = require('./Dog');

User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

Dog.hasMany(Item, {
    foreignKey: 'item_id',
    onDelete: 'CASCADE'
  });
  
  Item.belongsTo(Dog, {
    foreignKey: 'item_id'
  });

module.exports = { User, Dog };