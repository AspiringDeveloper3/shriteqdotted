import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store';
import Footer from './components/Footer';
import Methodlogy from './components/Methodology';
import './App.css';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

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
          <Route path="/store" element={<Store />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
