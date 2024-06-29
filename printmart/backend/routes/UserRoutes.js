const express = require('express')
const UserController = require('../controllers/UserController')
console.log(UserController)
const route = express.Router()

route.post('/register', UserController.register)
route.post('/login', UserController.login)

module.exports = route
