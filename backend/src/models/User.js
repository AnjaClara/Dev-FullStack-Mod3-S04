const { INTEGER, STRING, DATE } = require('sequelize')
const { connection } = require('../database/connection')
const { Cart } = require('./Cart')

const User = connection.define('users', {
  user_id:{
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  }
}, {underscored: true, paranoid: true})

Cart.belongsToMany(User, {foreignKey: 'user_id'})
User.belongsToMany(User, {foreignKey: 'user_id'})

module.exports = { User }