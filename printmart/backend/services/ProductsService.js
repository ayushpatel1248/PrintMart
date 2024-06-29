const Products = require("../model/Products");
const mongoose = require("mongoose");
const ProductServices = {};

ProductServices.getAllProduct = async () => {
  // let numberOfSkip = (skip - 1) * limit;

  // const productData = await Products.aggregate([
  //   {
  //     $lookup: {
  //       from: "brands", // The collection to join with
  //       localField: "brand", // The field from the input documents (products collection)
  //       foreignField: "name", // The field from the documents of the "brands" collection
  //       as: "brand" // The alias for the new array field containing the joined documents
  //     },
  //   },
  //   { $skip: numberOfSkip },
  //   { $limit: limit }
  // ])
  const productsData = await Products.find({});
  if (!productsData) {
    return {
      status: "err",
      msg: "no product found",
      data: null,
    };
  } else {
    return {
      status: "ok",
      msg: "all products list",
      data: productsData,
    };
  }
};


ProductServices.getSingleProduct = async (_id) => {

  const productsData = await Products.find({_id});
  if (!productsData) {
    return {
      status: "err",
      msg: "no product found",
      data: null,
    };
  } else {
    return {
      status: "ok",
      msg: "product found",
      data: productsData[0],
    };
  }
};

module.exports = ProductServices;
