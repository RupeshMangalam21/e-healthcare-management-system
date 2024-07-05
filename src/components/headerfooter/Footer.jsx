// src/components/headerfooter/Footer.jsx

import React from "react";
import '../../style/Headerfooter.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sitefooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              At AVA-H, we are driven by a passion for transforming healthcare delivery and making a positive difference in people's lives. Join us on this journey as we reshape the future of healthcare together.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Developers</h6>
            <ul className="footerlinks">
              <li><a href="https://github.com/prince-panwar">Prince Panwar</a></li>
              <li><a href="https://github.com/RupeshMangalam21">Rupesh Mangalam</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footerlinks">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="https://github.com/RupeshMangalam21/e-healthcare-management-system">Contribute</a></li>
              <li><a href="#awards">Services</a></li>
              <li><a href="#login">Sign In</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <p className="copyrighttext">
              Copyright &copy; 2017 All Rights Reserved by AVA-H
              <a href="https://github.com/RupeshMangalam21/e-healthcare-management-system"></a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="https://github.com/RupeshMangalam21/e-healthcare-management-system" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="twitter" href="https://github.com/RupeshMangalam21/e-healthcare-management-system" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="dribbble" href="https://github.com/RupeshMangalam21/e-healthcare-management-system" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://github.com/RupeshMangalam21/e-healthcare-management-system" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;