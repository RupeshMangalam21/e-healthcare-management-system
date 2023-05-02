import React, { useEffect, useState } from 'react';
import { firestore,auth } from '../../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import "../../style/UserDashboard.css"


function UserDashboard() {
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const userRef = collection(firestore, 'MedicalHistory');
    const q = query(userRef, where('patientId', '==', userId));

    getDocs(q).then((querySnapshot) => {
      const history = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        history.push(data);
      });
      setMedicalHistory(history);
    });
  }, []);
  const handleClick =()=>{
    console.log(`Clicked`);
  }

  return (
    <div className="medical-history-container">
      <h2>Medical History</h2>
      <div className="medical-history-list">
      {medicalHistory.length > 0 ? (
  <ul>
    {medicalHistory.map((item) => (
      <li key={item.medicalHistoryId}>
        <button onClick={() => handleClick(item.doctorName, item.date)}>
          <div className="history-item">
            <div className="history-item-info">
              <p>Doctor: {item.doctorName}  Date: {new Date(item.Date).toLocaleDateString()}</p>
          
            </div>
          </div>
        </button>
      </li>
    ))}
  </ul>
) : (
  <p>No medical history found.</p>
)}
      
      </div>
    </div>
  );
}

export default UserDashboard;

