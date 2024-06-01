const { default: mongoose } = require("mongoose");
const { Account } = require("../model/user");

async function getbalance(req,res){
const  account= await Account.findOne({userId:req.userId})

res.json({
    balance:account.balance
}
)
}

async function transferbalance(req,res){
    const session= await mongoose.startSession()
    await session.startTransaction()
    const {amount,to} = req.body;
    const account=await Account.findOne({userId:req.userId}).session(session)
    if(!account || account.balance<amount){
     await session.abortTransaction()
        return res.status(400).json({
            message:"insufficient balance"
        })
    }
    const toaccount = await Account.findOne({userId:to}).session(session)
    if(!toaccount){
        await session.abortTransaction()
        return res.status(400).json({
            message:"receiver account not found"
        })
    }
    await Account.updateOne({userId:req.userId},{$inc:{balance: -amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance: +amount}}).session(session)
    await session.commitTransaction()
res.json({
    message:"transfer successful"
})
}
module.exports={getbalance,transferbalance}