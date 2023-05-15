import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import { firestore } from '../../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import HistoryCard from './HistoryCard';
import Form from 'react-bootstrap/Form';
import AddMedicalHistory from './AddMedicalHistory';
const ShowMedicalHistory = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);
    const [selectedItem,setSelectedItem]= useState("");
    const [isAddCLick,setIsAddClick]=useState(false);
    const [userId,setUserId]=useState("");
  
    const handleUserHistory = (e) => {
     
      e.preventDefault();
          const userRef = collection(firestore, 'MedicalHistory');
          const q = query(userRef, where('patientId', '==', userId));
      
          getDocs(q)
            .then((querySnapshot) => {
              const history = [];
              querySnapshot.forEach((doc) => {
                const data = doc.data();
                history.push(data);
              });
              setMedicalHistory(history);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      
 
    const handleClick =(item)=>{
      setSelectedItem(item);
      setIsAddClick(false);
  }
    const handleClose=()=>{
      setSelectedItem(null);
      setIsAddClick(false);
      
    }
  
    return (
      <div className="medical-history-container">
        <h2 style={{color:'aliceblue'}}>Medical History</h2>
        <Form onSubmit={handleUserHistory}>
        <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Enter Patient ID</Form.Label>
            <Form.Control type='text' placeholder='ID' onChange={(e)=>setUserId(e.target.value)} />
            <Button  type='submit'>
              Enter
            </Button>
            {userId&&(
            <Button style={{marginLeft:"5px"}} onClick={()=>{setIsAddClick(true); setSelectedItem(null);}}  >
              Add Record
            </Button>)}
            
          </Form.Group>
         
        </Form>
       
       
        {selectedItem ? (
          <div>
          <HistoryCard item={selectedItem}/>
          <button className='medical-card-button' onClick={() => handleClose()}>close</button>
          </div>
        ) : isAddCLick?( 
          <div>
            <AddMedicalHistory patient={userId}/>
            <button className='medical-card-button' onClick={() => handleClose()}>close</button>
          </div>
        ) :(
          <div className="medical-history-list">
            {medicalHistory.length > 0 ? (
              <ul>
                {medicalHistory.map((item) => (
                  <li key={item.medicalHistoryId}>
                    <button onClick={() => handleClick(item)} style={{width:"755px"}}>
                      <div className="history-item">
                        <div className="history-item-info">
                        <p> {new Date(item.Date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} -- Physician: {item.doctorName}</p>
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

export default ShowMedicalHistory;
