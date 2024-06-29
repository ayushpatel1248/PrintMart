const express = require("express")
var bodyParser = require('body-parser')
var cors = require("cors");

//-------------------------------------------------------
const app = express()
app.use(cors())

require("./db/db")

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//-----------------------Cart Route---------------------------------
const CartRoutes = require('./routes/CartRoutes')
app.use("/cart", CartRoutes)


const UserRoutes =  require('./routes/UserRoutes')
app.use("/", UserRoutes)


const ProductsRoutes =  require('./routes/ProductRoutes')
app.use("/", ProductsRoutes)

const PrintoutRoutes =  require('./routes/PrintourRoutes')
app.use("/", PrintoutRoutes)



app.listen(9999, ()=>{
  console.log("server is running on port : ", 9999)
});