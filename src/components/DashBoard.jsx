import { signOut } from 'firebase/auth';
import { auth } from '../lib/init-firebase';
import { Navigate } from 'react-router-dom';
import React,{useContext} from 'react';
import { AuthContext } from './auth/AuthProvider';


const DashBoard = () => {

    const handleSignOut=()=>{
        signOut(auth).then(()=>{
           console.log("sign out ")

        }).catch(error=>console.log(error))

    }
    

   
    return (
        <div>
          <button onClick={handleSignOut}>sign out</button>
        </div>
    );
}

export default DashBoard;
