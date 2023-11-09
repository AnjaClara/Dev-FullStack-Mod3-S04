const { create, findAll, findOne, findAllAdm, remove, restore, buyProduct } = require('../controller/cart.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')

class CartRouter{
  routesFromCart(){
    const cartRoutes = Router()
    cartRoutes.post('/cart', create)
    cartRoutes.get('/cart', auth, findAll)
    cartRoutes.get('/cart/:cartId', auth, logger, findOne)
    cartRoutes.get('/cartsAdm/', auth, findAllAdm)
    cartRoutes.delete('/carts/:cartId/remove', auth, remove)
    cartRoutes.post('/carts/:cartId/restore', auth, restore)
    cartRoutes.post('/carts/buy', auth, buyProduct)

    return cartRoutes
  }
}

module.exports = new CartRouter