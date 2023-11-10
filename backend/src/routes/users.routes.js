const { create, findAll, findOne, login, findCarts, update, updatePassword } = require('../controller/users.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')
const { logger } = require('../middlewares/log.middleware')

class UserRouter{
  routesFromUser(){
    const userRoutes = Router()
    userRoutes.post('/users', create)
    userRoutes.get('/users', auth, findAll)
    userRoutes.get('/users/:userId', auth, logger, findOne)
    userRoutes.patch('/users/:userId', auth, update)
    userRoutes.post('/users/login', login)
    userRoutes.patch('/users/:userId/password', auth, updatePassword)
    userRoutes.get('/users/:userId/carts', findCarts)

    return userRoutes
  }
}

module.exports = new UserRouter
