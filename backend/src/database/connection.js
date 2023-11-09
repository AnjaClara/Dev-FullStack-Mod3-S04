const { Sequelize } = require('sequelize')
const databaseconfig = require('../config/database')

const connection = new Sequelize(databaseconfig)

module.exports = { connection }