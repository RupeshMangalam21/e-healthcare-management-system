import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../lib/init-firebase';
import { collection, query, where, getDocs, updateDoc ,doc} from 'firebase/firestore';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../style/dashboard/Profile.css";
import Header from '../components/headerfooter/Header'
import Footer from '../components/headerfooter/Footer'

function Profile() {
  const [userData, setUserData] = useState(null);
  const[isEditing,setIsEditing]=useState(false);

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userRef = collection(firestore, 'User');
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
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    const form = event.currentTarget;
    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const bloodGroup = form.bloodGroup.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
   
    const userId = auth.currentUser.uid;
    const userRef = collection(firestore, 'User');
    const q = query(userRef, where('userId', '==', userId));
    getDocs(q).then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(firestore, 'User', userDoc.id);
        updateDoc(userDocRef, {
          name: name,
          age: age,
          gender: gender,
          bloodGroup: bloodGroup,
          phoneNumber: phoneNumber,
          email: email
        })
        .then(() => {
          console.log('User data updated successfully!');
        })
        .catch((error) => {
          console.error('Error updating user data:', error);
        });
      }
    });
  
    
  };

  return (
    <div>
    <Header/>
    <div className="profile-container">
      {userData && (
        <div className="profile">
          <Image src={userData.profileURL} roundedCircle className="profileimage" />
          <h2 className='pro-name'>{userData.name}</h2>
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
              
          {isEditing && (  <Button className='ui-button' type='submit' >Save</Button>)}
          </Form>
      {!isEditing&&(<Button className='ui-button' onClick={handleEdit}>Edit</Button>)}
     
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default Profile;
