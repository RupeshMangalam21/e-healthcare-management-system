import React,{useContext}from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { AuthContext } from './auth/AuthProvider';

export default function PrivateRoute() {
  const {CurrentUser}=useContext(AuthContext);
  return (
   CurrentUser?<Outlet/>: <Navigate to="/LogIn"/>
  );
}