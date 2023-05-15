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
   const [isLoading,setIsLoading] =useState(true);
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
    const checkUserType = async () => {
       if(!CurrentUser) return;
      const userId = auth.currentUser.uid;

      // Check if the user exists in the Patient collection
      const patientQuery = query(collection(firestore, 'Patient'), where('userId', '==', userId));
      const patientSnapshot = await getDocs(patientQuery);

      if (!patientSnapshot.empty) {
        // User found in the Patient collection, route to UserDashboard
        Navigate('/DashBoard');
        return;
      }

      // Check if the user exists in the Doctor collection
      const doctorQuery = query(collection(firestore, 'Doctor'), where('userId', '==', userId));
      const doctorSnapshot = await getDocs(doctorQuery);

      if (!doctorSnapshot.empty) {
        // User found in the Doctor collection, route to DoctorDashboard
        Navigate('/DoctorDashBoard');
        return;
      }

      // User not found in either collection, handle accordingly (e.g., show error message)
      console.log('User not found in Patient or Doctor collection');
    };

  
    useEffect(() => {
      if (CurrentUser) {
        checkUserType();
      } else {
        setIsLoading(false);
      }
    }, [CurrentUser]);
  
    if (isLoading) {
      // Display loading state while authentication is being initialized
      return <div>Loading...</div>;
    }
   
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
         <Button className="login-btn"  type="submit">
        login
      </Button>
      
            <div className="sign-btn">
              <Link to={'/SignUp'}>sign up</Link>
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
