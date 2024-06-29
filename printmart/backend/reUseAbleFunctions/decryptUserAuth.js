const jwt = require("jsonwebtoken")
const SECRET_KEY = "hahaha" 

const decryptUserAuth = (token)=>{
    try{
        const {userId} = jwt.verify(token, SECRET_KEY);
        console.log(jwt.verify(token, SECRET_KEY))
        return userId;
    }
    catch(err){
        return null;
    }
}
module.exports = decryptUserAuth