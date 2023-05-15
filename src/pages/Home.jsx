import {React}from 'react';
import "../style/home/Home.css";

import TopHomeComponent from '../components/home/TopHomeComponent';
import LogIn from '../components/auth/LogIn';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import Features from '../components/home/Features';
import Header from '../components/headerfooter/Header'
import Footer from '../components/headerfooter/Footer'
const Home = () => {
  
 
  
 
 
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