import React from 'react';
import MedicalHistory from './MedicalHistory';
import "../../style/dashboard/UserDashboard.css"
import HealthArticle from './HealthArticle';

const UserDashboard = () => {
  return (
    <div>
      <div className='History-card-container'>  
      <MedicalHistory/>
      <HealthArticle/>
      </div>
    
    </div>
  );
};
export default UserDashboard;
