import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from '../components/auth/AuthProvider'
import PrivateRoute from "../components/PrivateRoute"
import DashBoard from './DashBoard'
import Home from './Home'
import Profile from "../pages/Profile";
import MakeAppointments from "../pages/MakeAppointments"
import SignUp from "../components/auth/SignUp";
import DoctorDashboard from '../pages/DoctorDashboard'
import LogIn from '../components/auth/LogIn'
export default function MainComponent() {
  return (
    <div>
<AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route element={<PrivateRoute/>}>
          <Route path='/DashBoard' element={<DashBoard/>}/>
          <Route path='/DoctorDashBoard' element={<DoctorDashboard/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/MakeAppointments" element={<MakeAppointments/>}/>
          </Route>   
          <Route path='/logIn' element={<LogIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
</AuthProvider>
  </div>
  )
}
