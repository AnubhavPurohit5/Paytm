const express=require("express")
const userrouter=require("./userroutes/user")
const accountrouter=require("../routes/account router/account")
const router=express.Router()
router.use("/user",userrouter)
router.use("/account",accountrouter)

module.exports= router