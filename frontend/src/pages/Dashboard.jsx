import React from 'react'
import { Appbar } from '../dashcomponent/Appbar'
import { Balance } from '../dashcomponent/Balance'
import { Users } from '../dashcomponent/User'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Appbar/>
      <button className='bg-gray-600 flex justify-end text-white p-4 rounded-lg text-center item-center m-8' onClick={()=>{
        localStorage.clear()
        navigate("/signup")
      }}>Logout </button>
      <div className='m-8'>
      <Balance />
      <Users/>
      
      </div>
    </div>
  )
}

export default Dashboard
