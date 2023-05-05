import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../style/dashboard/Profile.css";


function Profile() {
  const [userData, setUserData] = useState(null);
  const[isEditing,setIsEditing]=useState(false);

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userRef = collection(firestore, 'Patient');
    const q = query(userRef, where('userId', '==', userId));
    getDocs(q).then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setUserData(userDoc.data());
      }
    });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave=()=>{
    setIsEditing(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const bloodGroup = form.bloodGroup.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    
  };

  return (
    <div className="profile-container">
      {userData && (
        <div className="profile">
          <Image src={userData.profileURL} roundedCircle className="profileimage" />
          <h2>{userData.name}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={userData.name}  disabled={!isEditing}/>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" defaultValue={userData.age}  disabled={!isEditing} />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" defaultValue={userData.gender}  disabled={!isEditing}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control type="text" defaultValue={userData.bloodGroup}  disabled={!isEditing}/>
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" defaultValue={userData.phoneNumber} disabled={!isEditing} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={userData.email} disabled={!isEditing} />
            </Form.Group>
           
          </Form>
          {isEditing?(  <button onClick={handleSave}>Save</button>):(   
              
            <Button onClick={handleEdit}>Edit</Button>)}
     
        </div>
      )}
    </div>
  );
}

export default Profile;
