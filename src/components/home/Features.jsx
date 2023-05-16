import React from "react";
import feature from "../../assets/consult.svg"
import "../../style/home/Feature.css"



const Features= () => (
  <div className="app__header app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">Our Services</h1>

      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
    
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Patient Scheduling System 
      </p>
      <p className="p__opensans">Efficiently manage appointments, streamline workflows, and improve patient experience with our advanced scheduling system.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
  
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Electronic Medical Records 
      </p>
      <p className="p__opensans">Access comprehensive patient records securely, improve data accuracy, and enhance collaboration among healthcare providers.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
   
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Healthcare Awareness 
      </p>
      <p className="p__opensans">Empower individuals with accurate information, promote preventive care, and raise awareness about important health topics.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
    
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Online Consultation Platform 
      </p>
      <p className="p__opensans">Connect with healthcare professionals anytime, anywhere, for convenient and personalized virtual consultations, ensuring timely access to healthcare services.</p>
    </div>
  </div>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={feature} alt="laurels_img" />
    </div>
  </div>
);

export default Features;