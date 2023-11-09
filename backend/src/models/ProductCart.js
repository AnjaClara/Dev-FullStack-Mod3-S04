const { INTEGER } = require('sequelize')
const { connection } = require('../database/connection')

const ProductCart = connection.define('productCarts', {
  cart_id:{
    type: INTEGER,
    allowNull: false,
    references:{
      model: 'carts',
      key: 'cart_id'
    }
  },
  product_id:{
    type: INTEGER,
    allowNull: false,
    references:{
      model: 'users',
      key: 'product_id'
    }
  },
}, {underscored: true, paranoid: true})

module.exports = { ProductCart }