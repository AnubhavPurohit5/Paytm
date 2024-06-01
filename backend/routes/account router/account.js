const express=require("express")
const{getbalance, transferbalance}=require("../../controller/account")
const authmiddleware=require("../../middleware/index")
const router=express.Router()
router.get("/balance",authmiddleware,getbalance)
router.post("/transfer",authmiddleware,transferbalance)
module.exports=router