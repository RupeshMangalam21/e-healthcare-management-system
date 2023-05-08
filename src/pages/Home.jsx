import {React,useContext, useEffect}from 'react';
import "../style/home/Home.css";
import { useNavigate} from 'react-router-dom';
import TopHomeComponent from '../components/home/TopHomeComponent';
import AboutUs from '../components/home/AboutUs';
import { AuthContext } from '../components/auth/AuthProvider';


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
    </div>
      
  );
}

export default Home;