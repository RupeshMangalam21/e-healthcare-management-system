import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from '../components/auth/AuthProvider'
import LogIn from '../components/auth/LogIn'
import SignUp from '../components/auth/SignUp'
import DashBoard from './DashBoard'
import Home from './Home'
import PrivateRoute from "../components/PrivateRoute"
export default function MainComponent() {
  return (
    <div>
<AuthProvider>

      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route element={<PrivateRoute/>}>
          <Route path='/DashBoard' element={<DashBoard/>}/>
          </Route>   
       
         <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
</AuthProvider>
    
    
    </div>
  )
}
