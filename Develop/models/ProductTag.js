const { Model, DataTypes } = require('sequelize');
const { Product } = require('.');

const sequelize = require('../config/connection');
const Tag = require('./Tag');

class ProductTag extends Model { }

ProductTag.init(
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        //this is reference to another model
        model: "Product",
        //this is the column name of the referenced model
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        //this is reference to another model
        model: "Tag",
        //this is the column name of the referenced model
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
