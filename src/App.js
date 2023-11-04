import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Timeline from './components/Timeline'
import './App.css';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <br></br>
      <div id='filler' className='filler'>

      </div>
      <About />
      <Timeline />
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
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
