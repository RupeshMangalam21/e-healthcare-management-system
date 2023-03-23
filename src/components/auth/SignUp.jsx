import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style/SignUp.css';
import{auth} from '../../lib/init-firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';


export default function SignUp() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((useCredentials) =>{
            console.log(useCredentials);
            
        }).catch((error) =>{
            console.log(error);
        })

        return <Navigate to={"/LogIn"}/>

    }
    return (
    
    <div>
        <div className="form-container">
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <div className="log-btn">
         <Button className="lg-btn"  type="submit">
        Create account
      </Button>
      </div>
     
   
    </Form>
    </div>
    </div>
  )
}
