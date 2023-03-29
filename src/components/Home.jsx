import React from "react";
import "../style/Home.css";
import "../style/main.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
  ],
};

const Home = () => {
  return (
    <div className="hero-section">
      <div>
        <Slider {...settings}>
          <div>
            <Card className="card" style={{ width: "25rem", height: "16rem" }}>
              <Card.Body>
                <Card.Title>User</Card.Title>
                <Card.Text>
                  Join as a user and Organise your medical data easily. Sign up
                  today and gain access to a wealth of health resources and
                  information.
                </Card.Text>
                <Link to={"/LogIn"} className="login-btn">
                  {" "}
                  <Card.Link>Login</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="card" style={{ width: "25rem", height: "16rem" }}>
              <Card.Body>
                <Card.Title>Healthcare Professional</Card.Title>
                <Card.Text>
                  Access your secure account to view patient information and
                  update records. Join a supportive community of patients and
                  healthcare providers.
                </Card.Text>
                <Link
                  to={"/LogIn"}
                  className="login-btn"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <Card.Link>Login</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="card" style={{ width: "25rem", height: "16rem" }}>
              <Card.Body>
                <Card.Title>Admin</Card.Title>
                <Card.Text>
                  Manage your databases with ease and efficiency. Join a
                  supportive community of patients and healthcare providers.
                </Card.Text>
                <Link to={"/LogIn"} className="login-btn">
                  {" "}
                  <Card.Link>Login</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
