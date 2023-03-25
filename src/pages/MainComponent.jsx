import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from '../components/auth/AuthProvider'
import LogIn from '../components/auth/LogIn'
import SignUp from '../components/auth/SignUp'
import DashBoard from './DashBoard'
import Header from '../components/headerfooter/Header'
import Home from './Home'
import Footer from '../components/headerfooter/Footer'
export default function MainComponent() {
  return (
    <div>
<AuthProvider>
<Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DashBoard' element={<DashBoard/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
</AuthProvider>
    <Footer/>
    
    </div>
  )
}
