const mongoose = require("mongoose")

const { Schema } = mongoose;

const ProductSchema = new Schema({
    "name": {
        "type": "String",
        required: true,
    },
    "description" : {
        "type": "String",
        required : true
    },
    "brand": {  
        "type": "String", 
        required: true,
    },
    "price": {
        "type": "Number",
        required: true,
        min: 0,
    },
    "stock": {
        "type": "number",
        required: true,
    },
    "volume": {
        "type": "Number",
        required: true,
        min: 0,
    },
    "images" : {
        "type":["String"]
    }
})


const Products = mongoose.model("Products", ProductSchema)

module.exports = Products