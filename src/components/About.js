import React from 'react';
import './About.css'

const About = () => {

    return (
        <div className=" justify-content-center align-items-center about reveal container mt-5 text-center">
            
            <p className="mt-4">
            Dotted empowers visually impaired learners with our innovative Braille Pad, transforming digital media into Braille. Our mission is to make education accessible. With Dotted's Braille pad, visually impaired individuals can explore a diverse range of digital content, enhancing their learning experience. 
            <br></br>Join us in our journey towards inclusive education.
            </p>
            
            <a className='btn btn-lg btn-outline-dark' href='/about'>Learn more &gt;</a>
            <br></br>
            <br></br>
            
        </div>
    );
};

export default About;
