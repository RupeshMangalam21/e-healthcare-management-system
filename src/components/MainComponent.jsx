import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from './auth/AuthProvider'
import LogIn from './auth/LogIn'
import SignUp from './auth/SignUp'
import DashBoard from './DashBoard'
import Home from './Home'
export default function MainComponent() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DashBoard' element={<DashBoard/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      </AuthProvider>
    
    </div>
  )
}
