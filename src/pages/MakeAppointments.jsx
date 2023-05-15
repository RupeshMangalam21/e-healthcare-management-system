import React,{useEffect,useState} from 'react';
import Header from "../components/headerfooter/Header";
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import { auth, firestore} from '../lib/init-firebase';
import { Firestore, collection, getDocs, query,where} from 'firebase/firestore';
import "../style/MakeAppointment.css"
const MakeAppointments = () => {
 
    const [department,setDepartment]=useState("");
    const [doctorList,setDoctorList]=useState([]);
    const [selectedDoctor,setSelectedDoctor]=useState();
    const [docId,setDocId]=useState();
    const [date,setDate]=useState();
   
   useEffect( ()=>{
    const fetchList = async()=>{
        
        const docRef=collection(firestore,'User');
        const q = query(docRef, where('department', '==', department));
       getDocs(q).then((querySnapshot)=>{
          const doctor =[];
          querySnapshot.forEach((doc)=>{
            const data = doc.data();
            doctor.push(data);
          });
        setDoctorList(doctor);
          console.log(doctor);

       }).catch((error)=>{
        console.log(error);
       })
    }
    fetchList();

    },[department])

    const HandleSubmit=(e)=>{
        e.preventDefault();
      const  AppointRef=collection(firestore,'Appointment');
      



    }

    return (
        <div>
            <div><Header/></div>
          
        <Form style={{marginTop:"4rem"}} onSubmit={HandleSubmit}>
    <Form.Label>Department</Form.Label>
    <Form.Control as="select" value={department} onChange={(e)=>setDepartment(e.target.value)}>
          <option value="">Select...</option>
          <option value="General">General</option>
          <option value="Pediatrics">Pediatrics</option> 
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
          <option value="Neurology">Neurology</option>
          <option value="Oncology">Oncology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Radiology">Radiology</option>
          <option value="Anesthesiology">Anesthesiology</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Urology">Urology</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Hematology">Hematology</option>
          <option value="Infectious Diseases">Infectious Diseases</option>
          <option value="Physical Therapy and Rehabilitation">Physical Therapy and Rehabilitation</option>
          </Form.Control>
            
            <div>
        <Form.Label>Doctor</Form.Label>
        <Form.Select onChange={(e)=>setSelectedDoctor(e.target.value)}>
          <option value="">Select...</option>
          {doctorList.map((doctor) => (
            <option value={doctor.name} key={doctor.id}  >
              {doctor.name}
            </option>
          ))}
        </Form.Select>
 <DatePicker
  selected={date}
  onChange={(date) => setDate(date)}
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={15}
  dateFormat="MMMM d, yyyy h:mm aa"
/>


      </div>

 <Button type='submit'>Submit</Button>
      </Form>

            
        </div>
    );
}

export default MakeAppointments;
