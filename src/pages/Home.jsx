import {React,useContext, useEffect}from 'react';
import "../style/home/Home.css";
import { useNavigate} from 'react-router-dom';
import TopHomeComponent from '../components/home/TopHomeComponent';
import LogIn from '../components/auth/LogIn';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import { AuthContext } from '../components/auth/AuthProvider';
import Features from '../components/home/Features';

const Home = () => {
  const { CurrentUser} = useContext(AuthContext);
  const Navigate = useNavigate();
  useEffect(() => {
    if (CurrentUser) {
      Navigate('/DashBoard');
    }
  }, [CurrentUser,Navigate]);
  return (
   <div>
   <TopHomeComponent/>
   <AboutUs/> 
   <Features/>
   <ContactUs/>

   <LogIn/>    
    </div>
      
  );
}

export default Home;