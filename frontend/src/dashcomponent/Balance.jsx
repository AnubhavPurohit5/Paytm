import axios from "axios"
import { useEffect, useState } from "react"



export const Balance =  () => {
    const[balance,setbalance]=useState("")
    useEffect(()=>{axios.get("http://localhost:3000/api/account/balance",{headers:{Authorization
    :"Bearer "+localStorage.getItem("token")
},})
    .then(response => setbalance(response.data.balance))},[balance])
     
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}