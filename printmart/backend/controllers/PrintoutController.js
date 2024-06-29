const PrintoutServices = require("../services/PrintoutService")

const PrintoutController = {}

PrintoutController.printoutOrder = async (req, res) => {
    const {userid} = req.headers
    console.log(userid)
    const orderData = req.body
    const result = await PrintoutServices.printoutOrder(userid, orderData);
    res.send(result)
}

PrintoutController.getUserOrder = async (req, res) => {
    const {userid} = req.headers
    console.log(userid)
    const result = await PrintoutServices.getUserOrder(userid);
    
    res.send(result)
}

module.exports = PrintoutController 