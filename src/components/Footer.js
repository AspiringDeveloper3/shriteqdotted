import React from 'react';
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import './Footer.css'; // Import your custom CSS file for additional styles

const iconSize = 30;
const Footer = () => {
  return (
    <div className="footer py-5 text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mb-5">
            <h3 className="footer-title mb-3">Dotted</h3>
            <p className="footer-description">
              Dotted is your gateway to a world of innovative Braille technology. We are committed to
              enhancing accessibility and empowering visually impaired individuals through our cutting-edge
              products and solutions.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="footer-contact-title mb-3">Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: info@dotted.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main St, Cityville, Country</li>
              <div className='mx-auto'>
                <hr className='my-4'></hr>
                <h1>Follow us:</h1>
              <div className='row'>
              <li className="col-sm-8 d-flex mt-3 align-items-center">
                <FaInstagram size={iconSize} className="mr-5" /> @DottedOfficial
              </li>
              <li className="col-sm-4 d-flex mt-3 align-items-center">
                <FaFacebook size={iconSize} className="mr-5" /> DottedOfficial
              </li>
              </div>
              <div className='row'>
              <li className="col-sm-8 d-flex mt-3 align-items-center">
                <FaTwitter size={iconSize} className="mr-5" /> @DottedOfficial
              </li>
              <li className="col-sm-4 d-flex mt-3 align-items-center">
                <FaYoutube size={iconSize} className="mr-5" /> DottedOfficial
              </li>
              </div>
              </div>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center small">&copy; 2023 Dotted. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
