import React from "react";
import doctor from "../../assets/Doctor-img-home.jpeg";
import "../../style/home/TopHomeComponent.css";




const TopHomeComponent = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
   
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={doctor} alt="header_img" />
    </div>
  </div>
);

export default TopHomeComponent;