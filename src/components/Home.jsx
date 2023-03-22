import React from 'react';
import '../style/Home.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="card-container">
        <div >
          <Card className="card" style={{ width: '18rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title>Patient</Card.Title>
              <Card.Text>
                Join a supportive community of patients and healthcare providers.
                Sign up today and gain access to a wealth of health resources and information.
              </Card.Text>
              <Link to={"/LogIn"}> <Card.Link>Login now</Card.Link></Link>
             
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card" style={{ width: '18rem', height: '15rem'}}>
            <Card.Body>
              <Card.Title>Doctor</Card.Title>
              <Card.Text>
                Access your secure account to view patient information and update records.
                Join a supportive community of patients and healthcare providers.
              </Card.Text>
              <Link to={"/LogIn"}> <Card.Link>Login now</Card.Link></Link>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card className="card" style={{ width: '18rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title>DBA</Card.Title>
              <Card.Text>
                Manage your databases with ease and efficiency.
                Join a supportive community of patients and healthcare providers.
              </Card.Text>
               <Link to={"/LogIn"} className="login-btn"> <Card.Link>Login now</Card.Link></Link>
            
            </Card.Body>
          </Card>
        </div>
      </div>
      
    );
}

export default Home;
