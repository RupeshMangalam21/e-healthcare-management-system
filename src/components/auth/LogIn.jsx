import React, { useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style/LogIn.css';
import { auth } from '../../lib/init-firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link,Navigate,useLocation} from 'react-router-dom';
import {AuthContext} from './AuthProvider';


export default function LogIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const location = useLocation();
    const user=location.state;


    function handleSubmit(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((useCredentials) =>{
            console.log(useCredentials);
            
        }).catch((error) =>{
            console.log(error);
        })
      
    }
    const {CurrentUser} = useContext(AuthContext)
    if(CurrentUser){
      return <Navigate to={"/DashBoard"}/>
    }
    return (
    
    <div className='login-page'>
        <div className="log-form-container">
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label color='white' >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <div className="log-btn">
         <Button className="login-btn"  type="submit">
        login
      </Button>
      {user === 'Patient' ? (
            <div className="sign-btn">
              <Link to={'/SignUp'}>sign up</Link>
            </div>
          ) : null}
      </div>
    </Form>
    </div>
    </div>
  );
}
