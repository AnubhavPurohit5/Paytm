const {signuptype,signintype,updateusertype}=require("../types")
const {User,Account}=require("../model/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {jwtsecret}=require("./jwtsecret")
async function signup(req,res){
   const success= signuptype.safeParse(req.body)
   if(!success)throw new Error ("zod validation failed")
    const existinguser=await User.findOne({email:req.body.email})
if(existinguser){
    return res.status(411).json({message:"user already taken"})
}
const hashedpassword=await bcrypt.hash(req.body.password,10)
 const user=await User.create({
    email:req.body.email,
    password:hashedpassword,
    firstName:req.body.firstName,
    lastName:req.body.lastName
 })
 const userId=user._id
 await Account.create({
    userId,
    balance:10000000
 })
 res.json({message:"user created successfully"})
}


async function signin(req,res){
const success=signintype.safeParse(req.body)
const password=req.body.password
if(!success)throw new Error ("zod validation failed")
    const user=await User.findOne({email:req.body.email})
if(!user){
    return res.status(404).json({message:"user not found"})
}
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
    return res.status(401).json({message:"password is incorrect"})
}
const token = jwt.sign({user},jwtsecret)
res.json({token})
}
async function updateuser (req,res){
const success=updateusertype.safeParse(req.body)
if(!success)throw new Error ("zod validation failed")
    const user=await User.updateOne({_id:req.user},req.body)
res.send("update successfully")
}
async function getuser(req,res){
const filter=req.query.filter||""
const users=await User.find({
    $or:[{
        firstName:{"$regex":filter}
    },{
        lastName:{"$regex":filter}
    }]
})
res.json({
    user:users.map(user=>({
        id:user._id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName
    }))
})
}

module.exports= {signup,signin,updateuser ,getuser}