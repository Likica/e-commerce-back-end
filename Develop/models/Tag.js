const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      //use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      //this is the eqivalent of SQL's `NOT NULL` option
      allowNull: false,
      //instruct that this is the Primary Key
      primaryKey: true,
      //turn an auto increment
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
