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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        <Navigation />
        <main className="container py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/trading-plan" element={<TradingPlan />} />
          </Routes>
        </main>
        
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold mb-2">
                  <span className="text-gradient">Crypto</span>
                  <span className="text-blue-400">Trading</span>
                </div>
                <p className="text-gray-400">Advanced cryptocurrency trading platform</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400">Terms</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">Contact</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">Support</a>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-800">
              <p>© {new Date().getFullYear()} Crypto Trading. This is a demonstration website for educational purposes only.</p>
              <p className="mt-2">Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;