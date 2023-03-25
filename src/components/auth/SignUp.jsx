import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style/SignUp.css';
import{auth} from '../../lib/init-firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((useCredentials) =>{
            console.log(useCredentials);
          navigate("/LogIn")
            
        }).catch((error) =>{
            console.log(error);
        })

      

    }
    return (
    
    <div>
        <div className="sign-form-container">
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <div className="sign-log-btn">
         <Button className="sign-lg-btn"  type="submit">
        Create account
      </Button>
      </div>
     
   
    </Form>
    </div>
    </div>
  )
}
