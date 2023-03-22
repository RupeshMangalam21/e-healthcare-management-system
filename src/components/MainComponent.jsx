import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from './auth/LogIn'
import SignUp from './auth/SignUp'
import Home from './Home'
export default function MainComponent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    
    
    </div>
  )
}
