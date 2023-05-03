import React from 'react';
import MedicalHistory from './MedicalHistory';
import "../../style/dashboard/UserDashboard.css"
import HealthArticle from './HealthArticle';

const UserDashboard = () => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <MedicalHistory />
      </div>
      <div className='col-md-6'>
        <HealthArticle />
      </div>
    </div>
  );
};

export default UserDashboard;
