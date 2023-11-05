import React from 'react';
import './Store.css'; // Import your custom CSS file

const Store = () => {
  return (
    <div className="store container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="store-title text-light">Introducing Dotted 1.0</h2>
          <p className="store-slogan text-light">
            Experience the Future of Braille with Dotted 1.0 - Where Innovation Meets Accessibility!
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <img src='https://s3-alpha-sig.figma.com/img/36c1/0317/91b4a729da1d44211149539a109ae128?Expires=1699833600&Signature=h3~XlBmncMwNz1uWeIRoiCAYFNKd3TAmVQy5Nc4GJxdHn-w1AZpjvKeYkXuy9x7ylPNv3Wr50KmqtKSXgk-fPPXTCPfHIBd4WrGaODLZR6rpvfj6ohrcHGjffvXSE1F2nj2uKhR9HE09d0flfLoR1eCozpdd0wxF~-sT8e4X-ve6OwilJ~3pdvSvbGT2nmMTo1VX6oiXw-yKH4NA0gd~oA9aUlS-q90vhS5~ho4jvuy8VqsY5Uo2EKMoUhPvm-kfEqueGAh5BDBPInxCWAzGJMWEEFVrBNGVTilagzGpEHsqfeED8~dYaKwrdlST-PZaLtM2jcubDrGAcqBk91AbOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="Dotted 1.0 Braille Pad" className="img-fluid mt-0 mr-5 braille-pad-img" />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <p className="store-description text-light">
            Discover the power of Dotted 1.0, our latest Braille pad that empowers visually impaired individuals
            with cutting-edge technology to be able to use digital media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;
