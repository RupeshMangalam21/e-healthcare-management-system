import React from "react";
// import ava from "../../assets/logo-img/logo_avah.png"
import logo from "../../assets/medicine logo.png";
import "../../style/home/AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
    
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
       
        <p className="p__opensans-a">
        At AVA-H, we are dedicated to providing exceptional healthcare solutions and services to improve the well-being of individuals and communities. With a team of highly skilled professionals, we strive to make a positive impact in the healthcare industry.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={logo} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Mission</h1>
       
        <p className="p__opensans">
        Our mission is to deliver innovative technologies and solutions that enhance patient care, streamline processes, and drive efficiency. We understand the importance of seamless coordination among healthcare providers and aim to facilitate effective collaboration through our cutting-edge platforms.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;