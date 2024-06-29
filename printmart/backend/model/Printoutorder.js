const { required } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const Printoutorderschema = new Schema({
  userId: {
    type:"string",
    required:true
  },
  regno: {
    type: String,
    required: true,
  },
  addressselection: {
    type: String,
    required: true,
  },
  fulladdress: {
    type: String,
    required: true,
  },
  file: {
    type: "String",
    required: true
  },
  totalpages: {
    type: "String",
    required: true
  },
  printside: {
    type: "String",
    required: true
  },
  colortype: {
    type: "String",
    required: true
  },
  pagesize: {
    type: "String",
    required: true
  },
  paymentmode: {
    type: "String",
    required: true
  },
  orderstatus:{
    type: "string",
    required : true
  }
});

const Printoutorder = mongoose.model("Printoutorder", Printoutorderschema);

module.exports = Printoutorder;
