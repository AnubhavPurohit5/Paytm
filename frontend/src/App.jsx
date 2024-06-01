
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Signup} from './pages/signup'
import {Signin} from './pages/login'
import {SendMoney} from './pages/Send'
import Dashboard from './pages/Dashboard'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup'element={<Signup/>}></Route>
        <Route path='/signin'element={<Signin/>}></Route>
        <Route path='/dashboard'element={<Dashboard/>}></Route>
        <Route path='/send'element={<SendMoney/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
