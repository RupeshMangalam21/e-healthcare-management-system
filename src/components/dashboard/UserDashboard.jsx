import React from 'react';
import MedicalHistory from './MedicalHistory';
import HealthArticle from './HealthArticle';
import Appointments from './Appointments';
import Header from "../headerfooter/Header";
import NearbyHospitals from './NearbyHospitals';
import Footer from '../headerfooter/Footer'

import "../../style/dashboard/UserDashboard.css"

function UserDashboard() {
  return (
    <div>
      <Header/>
    <div className="row">
    <div className="col-md-6">
        <MedicalHistory />
        <NearbyHospitals />
        
      </div>
      <div className="col-md-7">
      <Appointments />
        <HealthArticle />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default UserDashboard;
