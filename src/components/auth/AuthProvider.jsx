import React ,{useEffect,useState,createContext}from 'react';
import {auth} from '../../lib/init-firebase'
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [CurrentUser,setCurrentUser]=useState(null);

  useEffect(()=>{
   const listen= onAuthStateChanged(auth,(user)=>{
        if(user){
        setCurrentUser(user);
    }
     else{
            setCurrentUser(null);
        }
    });
    return ()=>{
        listen();
    };
  },[]);

    return (
       <AuthContext.Provider value={{CurrentUser}}>
        {children}
       </AuthContext.Provider>
    );
}



