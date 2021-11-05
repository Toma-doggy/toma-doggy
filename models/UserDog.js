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
      defaultValue: 50
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    dog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'dogs',
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