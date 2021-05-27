// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,
  {
    foreignKey: "category_id",
    onDelete: "CASCADE"
  });
// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });
// Product.hasMany(ProductTag);
// Product.belongsTo(ProductTag);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

// Tag.hasMany(ProductTag);
// // ProductTag belongToMany Tags (through )
// ProductTag.belongsTo(Tag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
