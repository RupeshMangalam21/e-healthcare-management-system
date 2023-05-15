import React from 'react';
import Header from '../components/headerfooter/Header';
import ShowMedicalHistory from '../components/dashboard/ShowMedicalHistory';
const DoctorDashboard = () => {
    return (
        <div>
        <div> <Header/></div>
       <div className='ShowMedicalHistory-container'><ShowMedicalHistory/></div>
          
        </div>
    );
}

export default DoctorDashboard;
