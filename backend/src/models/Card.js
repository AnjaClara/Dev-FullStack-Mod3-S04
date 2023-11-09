const { INTEGER, STRING, DATE, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')

const Card = connection.define('card', {
  card_id:{
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
})

module.exports = { Card }