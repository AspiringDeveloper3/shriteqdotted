import React from 'react';
import './Info.css'; // Import your custom CSS for styling

const InfoComponent = () => {
  return (
    <div className="about-page container-fluid">
      <div className="row">
        <div className="col-lg-12 justify-content-between align-items-center mt-5 info-section info-section-1">
          <h2 className='info-heading'>Dotted: Transforming Digital Media into Braille</h2>
          <hr className='my-4'></hr>
          <p className='info-text'>
          Dotted is a BraillePad designed to make digital content accessible to everyone. It allows users to convert digital media into braille effortlessly, creating a seamless experience for individuals with visual impairments. By combining simplicity and technology, Dotted bridges the gap between the digital and tactile worlds, making information more accessible and empowering users to engage with digital content in meaningful ways.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5 info-section info-section-2">
          <h2 className='info-heading'>Our Mission and Vision</h2>
          <hr className='my-4'></hr>
          <p className='info-text'>
          At Dotted, our goal is simple: to make the digital world accessible to everyone, including those with visual impairments. We work towards inclusivity and independence by creating easy-to-use solutions for the visually impaired community. Our vision is a world where anyone, regardless of their abilities, can effortlessly read and interact with digital content using braille. We strive to make this vision a reality, ensuring that no one is left behind in the digital age.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-5 mt-5 info-section info-section-3">
          <h2 className='info-heading'>Meet the Founders</h2>
          <hr className='my-4'></hr>
          <p className='info-text'>
            Dotted was founded by a team of passionate individuals dedicated to making a difference. Our founders
            bring together expertise in technology, accessibility, and design, driving the vision of creating a more
            inclusive society.
          </p>
          <div className='row d-flex justify-content-between'>
            <div className='col-lg-2 col-md-2 col-sm-2'>
            <img className='col-lg-12 col-md-12 col-sm-12 founder-image' src='https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1647834692/vasantvalleyschool/person_photos/zgi6sa4f253afh11ter7.jpg' alt='kabir' />
            <h5>Aarush Kapur</h5>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
            <img className=' col-lg-12 col-md-12 col-sm-12 founder-image' src='https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1696999012/vasantvalleyschool/person_photos/hlnqzecee0slqfzjqsaw.jpg' alt='kabir' />
            <h5>Kabir Bahl</h5>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
            <img className='col-lg-12 col-md-12 col-sm-12 founder-image' src='https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1647834692/vasantvalleyschool/person_photos/y39msywxhwhy3ezwnzh8.jpg' alt='kabir' />
            <h5>Khrish Jain</h5>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
            <img className='col-lg-12 col-md-12 col-sm-12 founder-image' src='https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1647834700/vasantvalleyschool/person_photos/bu0hy0pv3lnzr1yxfjii.jpg' alt='kabir' />
            <h5>Savya Meattle</h5>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
            <img className='col-lg-12 col-md-12 col-sm-12 founder-image' src='https://res.cloudinary.com/veracross/image/upload/w_300,h_300,c_limit/v1693202634/vasantvalleyschool/person_photos/wjnhacyvjjxi275vsdfu.jpg' alt='kabir' />
            <h5>Vedant Saini</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
