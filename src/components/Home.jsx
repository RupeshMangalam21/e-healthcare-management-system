import React from 'react';
import '../style/Home.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="card-container">
        <div>
          <Card className="card" style={{ width: '25rem', height: '16rem' }}>
            <Card.Body>
              <Card.Title>User</Card.Title>
              <Card.Text>
                Join as a user and Organise your medical data easily.
                Sign up today and gain access to a wealth of health resources and information.
              </Card.Text>
              <Link to={"/LogIn"} className="login-btn"> <Card.Link>Login</Card.Link></Link>

            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card" style={{ width: '25rem', height: '16rem' }}>
            <Card.Body>
              <Card.Title>Healthcare Professional</Card.Title>
              <Card.Text>
                Access your secure account to view patient information and update records.
                Join a supportive community of patients and healthcare providers.
              </Card.Text>
              <Link to={"/LogIn"} className="login-btn"> <Card.Link>Login</Card.Link></Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card" style={{ width: '25rem', height: '16rem' }}>
            <Card.Body>
              <Card.Title>Admin</Card.Title>
              <Card.Text>
                Manage your databases with ease and efficiency.
                Join a supportive community of patients and healthcare providers.
              </Card.Text>
              <Link to={"/LogIn"} className="login-btn"> <Card.Link>Login</Card.Link></Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
