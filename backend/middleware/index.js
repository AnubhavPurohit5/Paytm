const jwt =require("jsonwebtoken")
const {jwtsecret}=require("../controller/jwtsecret")

function authentication(req,res,next){
const authheader =req.headers.authorization
if(!authheader){  
    res.status(403).send("token no present")
}
const token = authheader.split(" ")[1]
try {
    const decoded=jwt.verify(token,jwtsecret)
    
    if(decoded){
        req.userId=decoded.user
        next()
    }
} catch (error) {
    console.log(error)
}
}
module.exports=authentication