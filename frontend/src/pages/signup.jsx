import { useState } from "react"
import  BottomWarning  from "../components/Bottomwarning"
import  Button  from "../components/Button"
import Heading  from "../components/Headers"
import InputBox  from "../components/Inputbox"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const  Signup = () => {
const navigate=useNavigate()
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        
        <InputBox onChange={(e)=>setfirstName(e.target.value)} placeholder="nasty" label={"First Name"} />
        <InputBox onChange={e=>setlastName(e.target.value)} placeholder="yo" label={"Last Name"} />
        <InputBox onChange={e=>setEmail(e.target.value)}placeholder="nasty@gmail.com" label={"Email"} />
        <InputBox onChange={e=>setPassword(e.target.value)} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            axios.post("http://localhost:3000/api/user/signup",{email,lastName,firstName,password})
            navigate("/signin")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}