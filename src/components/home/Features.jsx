import React from "react";
import feature from "../../assets/features.jpg"
import "../../style/home/Feature.css"



const Features= () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">Our Features</h1>

      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
    
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Lorem ipsum dolor sit amet 
      </p>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
  
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Lorem ipsum dolor sit amet 
      </p>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
   
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Lorem ipsum dolor sit amet 
      </p>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione.</p>
    </div>
  </div>
      </div>
      <div className="app__laurels_awards">
      <div className="app__laurels_awards-card">
    
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        Lorem ipsum dolor sit amet 
      </p>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione.</p>
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