const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserDog extends Model {}

UserDog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    happiness: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    dog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'dog',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'userDog',
  }
);

module.exports = UserDog;