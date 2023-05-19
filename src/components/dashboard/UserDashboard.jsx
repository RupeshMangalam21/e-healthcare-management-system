import React ,{useContext, useState,useEffect}from 'react';
import MedicalHistory from './MedicalHistory';
import HealthArticle from './HealthArticle';
import Appointments from './Appointments';
import Header from "../headerfooter/Header";
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../auth/AuthProvider';
import NearbyHospitals from './NearbyHospitals';
import Footer from '../headerfooter/Footer'

import "../../style/dashboard/UserDashboard.css"

function UserDashboard() {
  const { CurrentUser } = useContext(AuthContext);
  const [isMailVerified, setIsMailVerified] = useState(false);

  useEffect(() => {
    if (CurrentUser && CurrentUser.emailVerified) {
      setIsMailVerified(true);
    } else {
      setIsMailVerified(false);
    }
  }, [CurrentUser]);
   
  return (
    <div>
    <Header />
    <div className="row">
      <div className="col-md-6">
        <MedicalHistory />
        <NearbyHospitals />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-sm-12">
            <Appointments />
          </div>
          <div className="col-sm-12">
            <HealthArticle />
          </div>
        </div>
      </div>
    </div>
    <Modal show={!isMailVerified} centered>
      <Modal.Header>
        <Modal.Title>Email Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please verify your email to continue using the application.</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    <Footer/>
    </div>
  );
}

export default UserDashboard;
