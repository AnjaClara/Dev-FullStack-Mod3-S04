const { create, findAll, findOne, findAllAdm, remove, restore } = require('../controller/product.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')

class ProductRouter{
  routesFromProduct(){
    const productRoutes = Router()
    productRoutes.post('/product', create)
    productRoutes.get('/product', auth, findAll)
    productRoutes.get('/product/:productId', auth, logger, findOne)
    productRoutes.get('/productsAdm/', auth, findAllAdm)
    productRoutes.delete('/products/:productId/remove', auth, remove)
    productRoutes.post('/products/:productId/restore', auth, restore)

    return productRoutes
  }
}

module.exports = new ProductRouter