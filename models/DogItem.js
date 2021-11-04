const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DogItem extends Model {}

DogItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dog',
        key: 'id',
      },
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'item',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'dogItem',
  }
);

module.exports = DogItem;