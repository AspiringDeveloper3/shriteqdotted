import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store';
import Footer from './components/Footer';
import Methodlogy from './components/Methodology';
import InfoComponent from './components/Info';
import './App.css';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';


const AboutPage = () => {
  return (
    <div>
      <Navbar />
    <InfoComponent />
    <Footer />
    </div>
  )
}

const StorePage = () => {
  return (
    <div>
      <Navbar/>
      <Store />
      <Footer />
    </div>
  )
}

const Main = () => {
  return (
    <div className="App">
      <div className='top-comp'>
      <Navbar />
      <Home />
      </div>
      <br></br>
      <div id='about' className='section filler'>
      </div>
      <About />
      <div id='timeline' className='section filler'></div>
      <Methodlogy />
      <div id='contact' className='section filler'></div>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Other components */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
