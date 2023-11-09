const { INTEGER, STRING, DATE } = require('sequelize')
const { connection } = require('../database/connection')

const User = connection.define('user', {
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
})

module.exports = { User }