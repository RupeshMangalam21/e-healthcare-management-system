import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from 'react-bootstrap';
import { auth, firestore, storage } from '../lib/init-firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../style/SideBar.css';
import '../style/Headerfooter.css'
import { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../components/auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SideBar() {
  const { CurrentUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out ');
        Navigate('/');
      })
      .catch((error) => console.log(error));
  };
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState("");
  const [ImageUrl,setImageUrl]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addPhoto = (event) => {
  const file = event.target.files[0];
  const userId = auth.currentUser.uid;
  const storageRef = ref(storage, `Profile/${userId}/${file.name}`);
    uploadBytes(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef).then((url) => {
          const userRef = collection(firestore, 'Patient');
          const q = query(userRef, where('userId', '==', userId));
          getDocs(q).then((querySnapshot) => {
            if (!querySnapshot.empty) {
              const userDoc = querySnapshot.docs[0];
              const userDocRef = doc(firestore, 'Patient', userDoc.id);
              updateDoc(userDocRef, { profileURL: url }).then(() => {
                setImageUrl(userData.profileURL)
              }).catch((error) => {
                console.log('Error updating photo URL in user document:', error);
              });
            }});
        });
      }).catch((error) => {
        console.log('Error uploading photo to storage:', error);
      });
     
  };
  
    useEffect(() => {
    const userId = auth.currentUser.uid;
    const userRef = collection(firestore, 'Patient');
    const q = query(userRef, where('userId', '==', userId));
    getDocs(q).then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setUserData(userDoc.data());
        if (userDoc.data().profileURL) {
          setImageUrl(userDoc.data().profileURL);
        }
      }
    });
  }, [ImageUrl]);
 
  return (
    <div className="sidebar-container">
      <div className="nav-sign-out" onClick={handleShow}>
        <GiHamburgerMenu />
      </div>
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="profileContainer">   
            {ImageUrl ? (
        <Image  src={ImageUrl} roundedCircle className='profileImage' />
      ) : (
        <div className="add-photo-container">
          <input type="file" accept="image/*" onChange={addPhoto} />
          <button className="add-photo-button">Add Photo</button>
       </div> )}
      
     <div className='username' >{userData.name}</div>
      <div className='username' >{auth.currentUser.uid}</div>
      </div> 
      <div className="menu-options">
    <Link to="../Pages/Profile.jsx" className="menu-option">
      Profile
    </Link>
    <Link to="../pages/Appointments.jsx" className="menu-option">
      Appointments
    </Link>
  </div>      
      </Offcanvas.Body>
      {CurrentUser && (
        <div className="sign-out" onClick={handleSignOut}>
          <FaSignOutAlt />
        </div>
      )}
      </Offcanvas>
    </div>
  );
}
export default SideBar;
