const express = require("express")

const route = express.Router()

const PrintoutController = require("../controllers/PrintoutController")
route.post("/printoutOrder", PrintoutController.printoutOrder)
route.post("/getUserOrder", PrintoutController.getUserOrder)

module.exports = route