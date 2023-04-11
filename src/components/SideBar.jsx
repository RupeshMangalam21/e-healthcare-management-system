import React, { useEffect,useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/SideBar.css'


import { auth, firestore } from '../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';


function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [userData,setUserData] = useState("");
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


  return (
    <div className="sidebar-container">
     <div className="nav-sign-out" onClick={handleShow}>
            <GiHamburgerMenu/>
          </div>

      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{userData.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


export default SideBar;