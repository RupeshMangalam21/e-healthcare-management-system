import React, { useState,useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../style/LogIn.css';
import { useNavigate} from 'react-router-dom';
import { auth, firestore} from '../../lib/init-firebase';
import { collection, query, where, getDocs} from 'firebase/firestore';

import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link} from 'react-router-dom';
import {AuthContext} from './AuthProvider';


export default function LogIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const {CurrentUser} = useContext(AuthContext)
    
    function handleClose() {
      setError(null);
    }

    function handleSubmit(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((useCredentials) =>{
            console.log(useCredentials);
            
        }).catch((error) =>{
         setError(error.message);
        })
      
    }
    useEffect(() => {
      const checkUserType = async () => {
        if (!CurrentUser) return;
        const userId = auth.currentUser.uid;
    
        const userQuery = query(collection(firestore, 'User'), where('userId', '==', userId));
        const userSnapshot = await getDocs(userQuery);
    
        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          const role = userData.role;
    
          if (role === 'Patient') {
            // User is a patient, route to UserDashboard
            Navigate('/Dashboard');
          } else if (role === 'Doctor') {
            // User is a doctor, route to DoctorDashboard
            Navigate('/DoctorDashboard');
          } else {
            // Handle other roles or show error message
            console.log('Unknown user role');
          }
        } else {
          // User not found in the User collection, handle accordingly (e.g., show error message)
          console.log('User not found in User collection');
        }
      };
    
      if (CurrentUser) {
        checkUserType();
      }
    }, [CurrentUser,Navigate]);
    
   
    return (
    
    <div>
        <div className="log-form-container  app__header  section__padding" id='login'>
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
         <Button className="ui-button-li"  type="submit">
        LOGIN
      </Button>
      
            <div className="ui-button-si">
              <Link to={'/SignUp'}>SIGN UP</Link>
            </div>
         
      </div>
    </Form>
    </div>
    <Modal show={error !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
