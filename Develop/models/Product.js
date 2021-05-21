// import important parts of sequelize library
const { Model, DataTypes, DECIMAL, NUMERIC } = require('sequelize');
const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
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
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      primaryKey: true,
      //validates that the value is decimal ???
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //set default value to 10
      defaultValue: 10,
      //validates that the value is numeric
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        //this is reference to another model
        model: Category,
        //this is the column name of the referenced model
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
