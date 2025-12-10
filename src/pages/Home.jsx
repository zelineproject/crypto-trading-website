import React from 'react';
import CryptoCard from '../components/CryptoCard';

const Home = () => {
  const topCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: 68234.15, change: 2.34, icon: '₿' },
    { name: 'Ethereum', symbol: 'ETH', price: 3456.78, change: 1.25, icon: 'Ξ' },
    { name: 'Cardano', symbol: 'ADA', price: 0.68, change: 5.67, icon: 'A' },
    { name: 'Solana', symbol: 'SOL', price: 178.92, change: -0.89, icon: 'S' },
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Advanced Crypto Trading Platform</h1>
        <p>
          Trade smarter with real-time signals, portfolio tracking, 
          and personalized trading plans. Join thousands of successful traders today.
        </p>
        <div className="flex justify-center gap-3">
          <a href="/signals" className="btn">Start Trading</a>
          <a href="/portfolio" className="btn btn-outline">View Demo Portfolio</a>
        </div>
      </div>

      {/* Top Cryptos Section */}
      <div className="mb-4">
        <h2 className="page-title text-center">Top Cryptocurrencies</h2>
        <p className="page-description text-center">Real-time prices and 24h changes</p>
        
        <div className="crypto-grid">
          {topCryptos.map((crypto) => (
            <CryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="content-box">
        <h2 className="text-center">Why Choose Our Platform?</h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#60a5fa' }}>Expert Trading Signals</h3>
            <p style={{ color: '#cbd5e1' }}>Receive accurate buy/sell signals from our AI-powered analysis and expert traders.</p>
          </div>
          
          <div>
            <h3 style={{ color: '#60a5fa' }}>Portfolio Tracking</h3>
            <p style={{ color: '#cbd5e1' }}>Monitor all your investments in one dashboard with advanced analytics and performance insights.</p>
          </div>
          
          <div>
            <h3 style={{ color: '#60a5fa' }}>Trading Plans</h3>
            <p style={{ color: '#cbd5e1' }}>Create and follow personalized trading strategies tailored to your risk tolerance and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;