import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from '../components/auth/AuthProvider'
import PrivateRoute from "../components/PrivateRoute"
import DashBoard from './DashBoard'
import Home from './Home'
import Profile from "../pages/Profile";
import MakeAppointments from "../pages/MakeAppointments"
import SigninSignupForm from '../components/auth/SigninSignupForm'
export default function MainComponent() {
  return (
    <div>
<AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route element={<PrivateRoute/>}>
          <Route path='/DashBoard' element={<DashBoard/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/MakeAppointments" element={<MakeAppointments/>}/>
          </Route>   
       
         <Route path='/SigninSignupForm' element={<SigninSignupForm/>}/>
      </Routes>
</AuthProvider>
  </div>
  )
}
