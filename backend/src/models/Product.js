const { INTEGER, STRING, DATE, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')

const Product = connection.define('products', {
  product_id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  },

  description: STRING,
    
  price: {
    type: NUMERIC(2),
    allowNull: false
  },

  logoUrl: STRING,

  category: STRING,
}, {underscored: true, paranoid: true})

Cart.belongsToMany(Product, {foreignKey: 'product_id'})
Product.belongsToMany(Product, {foreignKey: 'product_id'})

module.exports = { Product }