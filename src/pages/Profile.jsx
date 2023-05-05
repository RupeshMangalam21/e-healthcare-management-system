import {firestore,auth} from "../lib/init-firebase";
import { collection,query,where,getDocs } from "firebase/firestore";
import { Image } from 'react-bootstrap';
import React,{useEffect,useState} from "react";

function Profile () {
    const[userData,setUserData]=useState();

    const handleEdit=()=>{
        console.log("edit");
    }
    useEffect(()=>{
        const userId = auth.currentUser.uid;
        const userRef = collection(firestore, 'Patient');
        const q = query(userRef, where('userId', '==', userId));
        getDocs(q).then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            setUserData(userDoc.data());
           
          }
        });
    },[]);
return(
    <div>
         <Image  src={userData.profileURL} roundedCircle className='profileImage' />
    {/* <h2>{userData.name}</h2>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Blood Group: {userData.bloodGroup}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Email: {userData.email}</p>
          <button onClick={handleEdit}>Edit</button> */}
    </div>
);
}
export default Profile;