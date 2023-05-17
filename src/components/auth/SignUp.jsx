import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth';
import { auth, firestore} from '../../lib/init-firebase';
import {addDoc,collection} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "../../style/SignUp.css"


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [userType,setUserType]=useState('');
  const [department,setDepartment]=useState('');
 
  const navigate = useNavigate();
 
  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const{user} =userCredentials;
       sendEmailVerification(user).then(()=>{ const userRef = collection(firestore,'User')
       const UserUid = userCredentials.user.uid;
       addDoc(userRef,{
        name: username,
        department: department,
        role: userType,
        email: user.email,
        userId: UserUid,
       }).then(()=>{
        console.log('New Patient created successfully');
        navigate('/');
       }).catch((error)=>{
        setError(error.message)
       });})
      
       
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }


  function handleClose() {
    setError(null);
  }

  return (
    <div className='signup-page'>
      <div className='sign-form-container'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Label>Select User Type</Form.Label>
          <Form.Control as="select" value={userType} onChange={handleUserTypeChange}>
          <option value="">Select...</option>
          <option value="Patient">Patient</option>
          <option value="Doctor">Doctor</option>
          </Form.Control>
        {userType==='Doctor' && ( 
          <>
         <Form.Label>Department</Form.Label>
    <Form.Control as="select" value={department} onChange={(e)=>setDepartment(e.target.value)}>
          <option value="">Select...</option>
          <option value="General">General</option>
          <option value="Pediatrics">Pediatrics</option> 
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
          <option value="Neurology">Neurology</option>
          <option value="Oncology">Oncology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Radiology">Radiology</option>
          <option value="Anesthesiology">Anesthesiology</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Urology">Urology</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Hematology">Hematology</option>
          <option value="Infectious Diseases">Infectious Diseases</option>
          <option value="Physical Therapy and Rehabilitation">Physical Therapy and Rehabilitation</option>
    </Form.Control>
    </>
    )}
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          {/* <div className='create-btn'> */}
            <Button className='ui-button-su' type='submit'>
              Create account
            </Button>
          {/* </div> */}
        </Form>
      </div>

      <Modal show={error !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button className='ui-button-su' variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

     
    </div>
  );
}




