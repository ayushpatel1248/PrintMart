const express = require("express")

const route = express.Router()

const ProductsController = require("../controllers/ProductsController")
route.post("/getAllProduct", ProductsController.getAllProduct)
route.post("/getSingleProduct", ProductsController.getSingleProduct)

module.exports = route