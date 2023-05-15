import {React,useContext,useEffect}from 'react';
import "../style/home/Home.css";
import { useNavigate} from 'react-router-dom';
import { auth, firestore} from '../lib/init-firebase';
import { collection, query, where, getDocs} from 'firebase/firestore';
import {AuthContext} from '../components/auth/AuthProvider';
import TopHomeComponent from '../components/home/TopHomeComponent';
import LogIn from '../components/auth/LogIn';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import Features from '../components/home/Features';
import Header from '../components/headerfooter/Header'
import Footer from '../components/headerfooter/Footer'
const Home = () => {
  const Navigate = useNavigate();
  const {CurrentUser} = useContext(AuthContext)
  useEffect(() => {

    const checkUserType = async () => {
      if (!CurrentUser) return;
      const userId = auth.currentUser.uid;
  
      const userQuery = query(collection(firestore, 'User'), where('userId', '==', userId));
      const userSnapshot = await getDocs(userQuery);
  
      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        const role = userData.role;
  
        if (role === 'Patient') {
          // User is a patient, route to UserDashboard
          Navigate('/DashBoard');
        } else if (role === 'Doctor') {
          // User is a doctor, route to DoctorDashboard
          Navigate('/DoctorDashboard');
        } else {
          // Handle other roles or show error message
          console.log('Unknown user role');
        }
      } else {
        // User not found in the User collection, handle accordingly (e.g., show error message)
        console.log('User not found in User collection');
      }
    };
  
    if (CurrentUser) {
      checkUserType();
    }
  }, [CurrentUser,Navigate]);
  
  
 
 
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