import React from 'react';
import MedicalHistory from './MedicalHistory';
import HealthArticle from './HealthArticle';
import Appointments from './Appointments';
import "../../style/dashboard/UserDashboard.css"

function UserDashboard() {
  return (
    <div>
    <div className="row">
      <div className="col-md-6">
        <MedicalHistory />
        
        
      </div>
      <div className="col-md-7">
      <Appointments />
        <HealthArticle />
      </div>
    </div>
    </div>
  );
}

export default UserDashboard;
