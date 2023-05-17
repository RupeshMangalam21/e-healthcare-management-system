import React from "react";
import contact from "../../assets/findus.svg";

const ContactUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Block B1 Chandigarh University, Mohali
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#00ff39", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={contact} alt="finus_img" />
    </div>
  </div>
);

export default ContactUs;