import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { serverTimestamp } from 'firebase/firestore';
import { auth, firestore} from '../../lib/init-firebase';
import {addDoc,collection, query, where, getDocs,} from 'firebase/firestore';
const AddMedicalHistory = ({patient}) => {
   
    const [patientName, setPatientName] = useState("");
    const[patientAge,setPatientAge]=useState("");
    const[patientGender,setPatientGender]=useState("");
    const[patientBlood,setPatientBlood]=useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [docId, setDocId] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [prescription, setPrescription] = useState("");
    const [remark, setRemark] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    const historyRef =collection(firestore,'MedicalHistory')
    addDoc(historyRef,{
        Date: serverTimestamp(),
        patientName: patientName,
        bloodGroup: patientBlood,
        age:patientAge,
        gender: patientGender,
        doctorName: doctorName,
        docId: docId,
        patientId: patient,
        diagnosis:diagnosis,
        prescription:prescription,
        remark: remark,
    }).catch((error)=>{
        console.log(error);
    })
        setPatientName("");
        setDiagnosis("");
        setDocId("");
        setDoctorName("");
        setPrescription("");
        setRemark("");
      };
     
     
      useEffect(() => {
        
        const doctorRef = collection(firestore, 'User');
        const doctorQuery = query(doctorRef, where('userId', '==', docId));
        getDocs(doctorQuery)
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              const doctorDoc = querySnapshot.docs[0];
              const doctorData = doctorDoc.data();
              setDoctorName(doctorData.name);
              console.log(doctorData);
            }
          })
          .catch((error) => {
            console.error('Error fetching Doctor data:', error);
          });
      }, [docId]);

      useEffect(() => {
      // Fetch Patient data
      setDocId(auth.currentUser.uid) ;
        const patientRef = collection(firestore, 'User');
        const patientQuery = query(patientRef, where('userId', '==', patient));
        getDocs(patientQuery).then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const patientDoc = querySnapshot.docs[0];
            const patientData = patientDoc.data();
            setPatientName(patientData.name);
            setPatientGender(patientData.gender);
            setPatientAge(patientData.age);
            setPatientBlood(patientData.bloodGroup);

            
          }
        }).catch((error) => {
          console.error('Error fetching Patient data:', error);
        });
      }, [patient]);
      
    
      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDate">
            
       <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" defaultValue={patientName} />
          </Form.Group>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Patient ID</Form.Label>
            <Form.Control type="text" value={patient} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Patient age</Form.Label>
            <Form.Control type="number" value={patientAge} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Patient gender</Form.Label>
            <Form.Control type="text" value={patientGender} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Patient Blood-Group</Form.Label>
            <Form.Control type="number" value={patientBlood} />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control type="text" defaultValue={doctorName}  />
          </Form.Group>
      
       <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Doctor ID</Form.Label>
            <Form.Control type="text" value={docId} />
          </Form.Group>

     <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Diagnosis</Form.Label>
            <Form.Control type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
          </Form.Group>
          
     <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>prescription</Form.Label>
            <Form.Control type="text" value={prescription} onChange={(e) => setPrescription(e.target.value)} />
          </Form.Group>
         
    <Form.Group className="mb-3" controlId="formDiagnosis">
            <Form.Label>Remark</Form.Label>
            <Form.Control type="text" value={remark} onChange={(e) => setRemark(e.target.value)} />
          </Form.Group>
    <Button type="submit">Submit</Button>
        </Form>
      );
    };
    

export default AddMedicalHistory;
