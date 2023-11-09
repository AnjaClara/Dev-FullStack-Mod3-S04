const { INTEGER, STRING, FLOAT } = require('sequelize')
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
    type: FLOAT,
    allowNull: false
  },

  logoUrl: STRING,

  category: STRING,
}, {underscored: true, paranoid: true})

module.exports = { Product }