const express=require("express")
const {signup, signin,updateuser,getuser}=require("../../controller/user")

const router=express.Router()
router.post("/signup",signup)
router.post("/signin",signin)
router.put("/updateuser",updateuser)
router.get("/get",getuser)
module.exports=router