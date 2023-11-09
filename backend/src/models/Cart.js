const { INTEGER, BOOLEAN, FLOAT } = require('sequelize')
const { connection } = require('../database/connection')
const { Product } = require('./Product')
const { ProductCart } = require('../models/ProductCart')

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
    type: FLOAT,
    allowNull: false
  },
  status:{
    type: BOOLEAN,
  },
}, {underscored: true, paranoid: true})

Product.belongsToMany(Cart, { through: ProductCart, foreignKey: 'productId', as: 'carts' });
Cart.belongsToMany(Product, { through: ProductCart, foreignKey: 'cartId', as: 'products' });

ProductCart.hasMany(Cart, {foreignKey: 'cartId'})


module.exports = { Cart }