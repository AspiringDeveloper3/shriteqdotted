import React from 'react';
import './Store.css'; // Import your custom CSS file

const Store = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="store-title text-light">Introducing Dotted 1.0</h2>
          <p className="store-slogan text-secondary">
            Experience the Future of Braille with Dotted 1.0 - Where Innovation Meets Accessibility!
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <img src='' alt="Dotted 1.0 Braille Pad" className="braille-pad-img" />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <p className="store-description text-light">
            Discover the power of Dotted 1.0, our latest Braille pad that empowers visually impaired individuals
            with cutting-edge technology and unparalleled usability.
          </p>
          <a href="/dotted-1.0" className="btn btn-primary btn-lg">Check it Out</a>
        </div>
      </div>
    </div>
  );
};

export default Store;
