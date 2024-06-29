const e = require('cors');
const Printoutorder = require("../model/Printoutorder")

const pricelist = {
    blackandwhiteAndbothside: 2,
    colorAndbothside: 5,
    blackandwhiteAndsingleside: 5,
    colorAndsingleside: 10 
}

const PrintoutServices = {}

PrintoutServices.printoutOrder = async (userId, orderData)=>{
    try{
        var totalprice = 0;
        if(orderData.printside == "singleside" && orderData.colortype == "blackandwhite"){
            totalprice = orderData.totalpages * pricelist.blackandwhiteAndsingleside;
        }
        else if(orderData.printside == "bothside" && orderData.colortype == "blackandwhite"){
            totalprice = orderData.totalpages * pricelist.blackandwhiteAndbothside;
        }
        else if(orderData.printside == "singleside" && orderData.colortype == "color"){
            totalprice = orderData.totalpages * pricelist.colorAndsingleside;
        }
        else{
            totalprice = orderData.totalpages * pricelist.colorAndbothside;
        }
        if(orderData.paymentmode == "cod"){
            console.log(userId)
            const {firstname,lastname,email,phonenumber,regno,addressselection,fulladdress,file,totalpages,printside,colortype,pagesize,paymentmode} = orderData 
            const orderDone = await Printoutorder.create({userId, ...orderData, orderstatus:"notyetdelivered"})
            if(orderDone){
                return{
                    status: "ok",
                    msg: "order done successfully",
                    data: {"totalprice":totalprice}
                }
            }
            else{
                return{
                    status : "err",
                    msg : "order failed",
                    data : null
                }
            }
        }
        else{
            return{
                status:"err",
                msg:"upi is not supported right now",
                data: null
            }
        }

    }
    catch(err){
        return {
            status: "err",
            msg: "some error occured",
            data: err.message
        }
    }
}

PrintoutServices.getUserOrder = async (userId)=>{
    try{
        const orderfound = await Printoutorder.find({userId})
        console.log("order list found" , orderfound)
        if(orderfound){
            return{
                status:"ok",
                msg: "order list found",
                data: orderfound
            }
        }
        else{
            return{
                status: "err",
                msg : "no orders found related ot this userid",
                data: []
            }
        }
    }
    catch(err){
        return{
            status:"err",
            msg:err.message,
            data: []
        }

    }
}
module.exports = PrintoutServices;
