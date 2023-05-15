import React from "react";
import doctor from "../../assets/Doctor-img-home.jpeg";
import "../../style/home/TopHomeComponent.css";
import { Link } from "react-router-dom";




const TopHomeComponent = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
   
      <h1 className="app__header-h1">Advanced Virtual Administration for Healthcare</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      The e-Healthcare management system is a web-based project that seeks to provide effective management of employee data and medical data of patients in hospitals and clinics.{" "}
      </p>
      <button type="button" className="custom__button">
        <Link to={"/signUp"} style={{textDecoration:"none", color:"white"}}>Get Started</Link>
      
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={doctor} alt="header_img" />
    </div>
  </div>
);

export default TopHomeComponent;