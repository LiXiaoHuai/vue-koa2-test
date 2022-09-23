const Router = require('koa-router')

const {
    register
} = require('../controller/user.controller')

const userRouter = new Router({
    prefix: '/users'
})

userRouter.get('/register', register)

module.exports = userRouter;