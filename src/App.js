import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './components/NavBar';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initializing the Animate on Scroll functionality
AOS.init();

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
