import React from 'react';
import Header from '../components/headerfooter/Header';
import ShowMedicalHistory from '../components/dashboard/ShowMedicalHistory';
import Appointments from '../components/dashboard/Appointments';
const DoctorDashboard = () => {
    return (
        <div>
        <Header/>
        <div className="row">
    <div className="col-md-6">
        <ShowMedicalHistory />
        
        
      </div>
      <div className="col-md-7">
      <Appointments />
      
      </div>
    </div>
          
        </div>
    );
}

export default DoctorDashboard;
