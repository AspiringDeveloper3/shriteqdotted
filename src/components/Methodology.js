import React from 'react';
import { FaUsb, FaDesktop, FaBraille } from 'react-icons/fa';
import './Methodlogy.css'; // Import your custom CSS for dark theme styling

const Methodlogy = () => {
  return (
    <div className="reveal justify-content-center align-items-center  container dotted-container text-dark p-4">
      <h1 className="text-center mb-4 display-4">How Dotted Works?</h1>
      <div className="row justify-content-around">
        <div className="col-md-3 dotted-step">
          <FaUsb className="step-icon" />
          <h4>Plug in USB and Integrate BraillePad</h4>
          <hr className='my-4'></hr>
          <p>Connect the BraillePad to your computer via USB. Ensure proper integration for communication.</p>
        </div>
        <div className="col-md-3 dotted-step">
          <FaDesktop className="step-icon" />
          <h4>Select Media to Convert</h4>
          <hr className='my-4'></hr>
          <p>Select the media or text on your computer screen that you want to convert to braille using Dotted.</p>
        </div>
        <div className="col-md-3 dotted-step">
          <FaBraille className="step-icon" />
          <h4>Obtain the Braille Output</h4>
          <hr className='my-4'></hr>
          <p>Dotted will convert the selected media/text and display it on the BraillePad screen for easy reading.</p>
        </div>
      </div>
    </div>
  );
};

export default Methodlogy;
