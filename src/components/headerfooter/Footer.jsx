import React from "react";
import  '../../style/Headerfooter.css';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
 


const Footer =()=>{
    return(
        <footer className="sitefooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis exercitationem adipisci ratione eaque ex doloremque qui quos sapiente amet voluptatibus, velit, molestiae mollitia nam iure error aut delectus harum.</p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footerlinks">
                <li ><a href="">Chinese</a></li>
                <li><a href="">Italian</a></li>
                <li><a href="">Indian</a></li>
                <li><a href="">Mexican</a></li>
                <li><a href="">japanese</a></li>
                <li><a href="">French</a></li>
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footerlinks">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Contribute</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <p className="copyrighttext">Copyright &copy; 2017 All Rights Reserved by 
           <a href="#"></a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><FaFacebook/></a></li>
                <li><a className="twitter" href="#"><FaTwitter/></a></li>
                <li><a className="dribbble" href="#"><FaInstagram/></a></li>
                <li><a className="linkedin" href="#"> <FaLinkedin/></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    );
}
export default Footer;
