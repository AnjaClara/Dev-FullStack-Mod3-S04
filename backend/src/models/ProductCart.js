const { INTEGER, STRING, DATE, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')

const ProductCart = connection.define('productCarts', {
  productCart_id: {
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

Cart.belongsToMany(ProductCart, {foreignKey: 'productCart_id'})
ProductCart.belongsToMany(ProductCart, {foreignKey: 'productCart_id'})

module.exports = { ProductCart }