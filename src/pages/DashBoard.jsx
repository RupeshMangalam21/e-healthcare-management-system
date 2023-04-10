import { useEffect, useState} from "react";
import { collection, getDocs,query,where } from "firebase/firestore";
import {auth,firestore } from "../lib/init-firebase";

function Dashboard() {
  
  const [userData, setUserData] = useState("");
 

  useEffect(() => {
    const userId =auth.currentUser.uid;

    
      const userRef = collection(firestore, "Patient")
      const userNameQuery= query(userRef,where('userId','==',userId));
      getDocs(userNameQuery).then((QuerySnapshot)=>{
        if(!QuerySnapshot.empty){
            const userDoc =QuerySnapshot.docs[0];

            setUserData(userDoc.data());
        }
      
      });
      
  }, []);

  return (
    <div>
      <h2 style={{height:"100px", padding:"100px", margin:"100px"}}>Welcome, {userData.name}!</h2>
    </div>
  );
}

export default Dashboard;

