const zod=require("zod")
const signuptype=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    firstName:zod.string(),
    lastName:zod.string(),
})

const signintype=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
})
const updateusertype=zod.object({
    password:zod.string().min(6).optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})
module.exports={signuptype,signintype,updateusertype}