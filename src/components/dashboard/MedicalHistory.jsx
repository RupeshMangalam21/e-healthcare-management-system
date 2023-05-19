import React, { useEffect, useState } from 'react';
import { firestore,auth } from '../../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import HistoryCard from './HistoryCard';
import "../../style/dashboard/MedicalHistory.css"



function MedicalHistory() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [selectedItem,setSelectedItem]= useState("");

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
  const handleClick =(item)=>{
    setSelectedItem(item);
}
  const handleClose=()=>{
    setSelectedItem(null);
  }

  return (
    <div className="medical-history-container">
      <h2  className='Medical-header' style={{color:'aliceblue'}}>Medical History</h2>
      {selectedItem ? (
        <div>
        <HistoryCard item={selectedItem}/>
        <button className='medical-card-button' onClick={() => handleClose()}>close</button>
        </div>
      ) : (
        <div className="medical-history-list">
          {medicalHistory.length > 0 ? (
            <ul>
              {medicalHistory.map((item) => (
                <li key={item.medicalHistoryId}>
                  <button onClick={() => handleClick(item)} className='button-mh'>
                    <div className="history-item">
                      <div className="history-item-info">
                      <p className='medical-history-text'> {new Date(item.Date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} -- Doctor: {item.doctorName}</p>
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
      )}
    </div>
  );
          }  

export default MedicalHistory;

