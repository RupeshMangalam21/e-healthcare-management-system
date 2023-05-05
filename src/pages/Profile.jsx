import {firestore,auth} from "../lib/init-firebase";
import { collection,query,where,getDoc } from "firebase/firestore";
import React,{useEffect,useState} from "react";

function Profile () {
    const[userData,setUserData]=useState();
    useEffect(()=>{
        const id = auth.currentUser.uid;
        const userProfileref = collection(firestore,"Patient");
        const q = query(userProfileref,where("userId","=",id));
        getDoc(q).then((querySnapshot)=>{
            const user =[];
            querySnapshot.forEach((doc)=>{
                const data=doc.data();
                user.push(data);
            });
            console.log(user);
            setUserData(user);
        });
    },[]);
return(
    <div>

    </div>
);
}
export default Profile;
