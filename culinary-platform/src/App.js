import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CulinaryExperiences from './pages/CulinaryExperiences';
import VirtualCookingSessionDetails from './components/VirtualCookingSessionDetails';
import SharingRecipesAndTips from './components/SharingRecipesAndTips';

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/culinary-experiences" element={<CulinaryExperiences />} />
          <Route path="/virtual-cooking-session" element={<VirtualCookingSessionDetails />} />
          <Route path="/sharing-recipes-tips" element={<SharingRecipesAndTips />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
