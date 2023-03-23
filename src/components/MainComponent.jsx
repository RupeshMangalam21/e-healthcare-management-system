import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from './auth/LogIn'
import SignUp from './auth/SignUp'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
export default function MainComponent() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    <Footer/>
    
    </div>
  )
}
