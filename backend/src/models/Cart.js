const { INTEGER, STRING, DATE, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')
const { Product } = require('./Product')

const Cart = connection.define('carts', {
  cart_id:{
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id:{
    type: INTEGER,
    allowNull: false,
    references:{
      model: 'users',
      key: 'user_id'
    }
  },
  price: {
    type: NUMERIC(2),
    allowNull: false
  },
  status:{
    type: BOOLEAN,
  },
}, {underscored: true, paranoid: true})

Cart.belongsToMany(Product, {foreignKey: 'cart_id'})
Product.belongsToMany(Product, {foreignKey: 'cart_id'})

module.exports = { Cart }