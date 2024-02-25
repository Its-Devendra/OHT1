import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CulinaryExperiences from './pages/CulinaryExperiences';
import VirtualCookingSession from './components/VirtualCookingSessionDetails';
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
          <Route path="/virtual-cooking-session" element={<VirtualCookingSession />} />
          <Route path="/virtual-cooking-session/:sessionId" element={<VirtualCookingSessionDetails />} />
          <Route path="/sharing-recipes-tips" element={<SharingRecipesAndTips />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
