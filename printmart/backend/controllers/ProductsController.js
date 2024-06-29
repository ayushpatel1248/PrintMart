const ProductServices = require("../services/ProductsService")

const ProductsController = {}

ProductsController.getAllProduct = async (req, res) => {
    const result = await ProductServices.getAllProduct();
    res.send(result)
}

ProductsController.getSingleProduct = async (req, res) => {
    const {_id} = req.body;
    const result = await ProductServices.getSingleProduct(_id);
    res.send(result)
}

module.exports = ProductsController 