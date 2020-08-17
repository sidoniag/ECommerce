// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,
  {
    as: 'Product',
  });
// Categories have many Products
Category.hasMany(Product, {
  as: 'Category',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,
  {
    through: 'ProductTag',
    foreignKey: 'tagId'
  });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product), {
  as: 'Tag',
};

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};