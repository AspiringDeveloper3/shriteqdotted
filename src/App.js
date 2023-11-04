import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Timeline from './components/Timeline'
import Store from './components/Store';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <br></br>
      <div id='about' className='section filler'>
      </div>
      <About />
      <div id='timeline' className='section filler'></div>
      <Timeline />
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
