const { routesFromUser } = require('./users.routes')
const { routesFromProduct } = require('./products.routes')

const { Router } = require('express')
const { routesFromCart } = require('./cart.routes')

const routes = new Router()

routes.use('/api', [
  routesFromUser(),
  routesFromProduct(),
  routesFromCart()
])

module.exports = routes