import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Signals from './pages/Signals';
import TradingPlan from './pages/TradingPlan';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/plan" element={<TradingPlan />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Crypto Trading</div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Support</a>
        </div>
        
        <div className="footer-copyright">
          © {new Date().getFullYear()} Crypto Trading Platform. 
          Demonstration website for educational purposes only.
        </div>
      </div>
    </footer>
  );
}

export default App;
