import {React,useContext, useEffect}from 'react';
import "../style/home/Home.css";
import { useNavigate} from 'react-router-dom';
import { auth, firestore} from '../lib/init-firebase';
import { collection, query, where, getDocs} from 'firebase/firestore';
import TopHomeComponent from '../components/home/TopHomeComponent';
import LogIn from '../components/auth/LogIn';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import Features from '../components/home/Features';
import Header from '../components/headerfooter/Header'
import Footer from '../components/headerfooter/Footer'
const Home = () => {
  
  const Navigate = useNavigate();
  useEffect(() => {
    const checkUserType = async () => {
      const userId = auth.currentUser.uid;

      // Check if the user exists in the Patient collection
      const patientQuery = query(collection(firestore, 'Patient'), where('userId', '==', userId));
      const patientSnapshot = await getDocs(patientQuery);

      if (!patientSnapshot.empty) {
        // User found in the Patient collection, route to UserDashboard
        Navigate('/DashBoard');
        return;
      }

      // Check if the user exists in the Doctor collection
      const doctorQuery = query(collection(firestore, 'Doctor'), where('userId', '==', userId));
      const doctorSnapshot = await getDocs(doctorQuery);

      if (!doctorSnapshot.empty) {
        // User found in the Doctor collection, route to DoctorDashboard
        Navigate('/DoctorDashBoard');
        return;
      }

      // User not found in either collection, handle accordingly (e.g., show error message)
      console.log('User not found in Patient or Doctor collection');
    };

    // Call the checkUserType function when the component mounts
    checkUserType();
  }, [Navigate]);
 
 
  return (
   <div>
  <Header/>
   <TopHomeComponent/>
   <AboutUs/> 
   <Features/>
   <ContactUs/>
   <LogIn/>  
   <Footer/>  
    </div>
      
  );
}

export default Home;