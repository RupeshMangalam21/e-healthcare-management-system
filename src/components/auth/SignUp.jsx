import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore} from '../../lib/init-firebase';
import {addDoc,collection} from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import "../../style/SignUp.css"

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const{user} =userCredentials;
       const userRef = collection(firestore,'Patient')
       const UserUid = userCredentials.user.uid;
       addDoc(userRef,{
        name: username,
        email: user.email,
        userId: UserUid,
       }).then(()=>{
        console.log('New Patient created successfully');
        navigate('/LogIn');
       }).catch((error)=>{
        setError(error.message)
       });
       
      })
      .catch((error) => {
        setError(error.message);
      });
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

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <div className='create-btn'>
            <Button className='create' type='submit'>
              Create account
            </Button>
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




