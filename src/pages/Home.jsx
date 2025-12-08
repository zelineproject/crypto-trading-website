import React from 'react';
import CryptoCard from '../components/CryptoCard';

const Home = () => {
  const topCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: 68234.15, change: 2.34, icon: '₿' },
    { name: 'Ethereum', symbol: 'ETH', price: 3456.78, change: 1.25, icon: 'Ξ' },
    { name: 'Cardano', symbol: 'ADA', price: 0.68, change: 5.67, icon: 'A' },
    { name: 'Solana', symbol: 'SOL', price: 178.92, change: -0.89, icon: 'S' },
    { name: 'Polkadot', symbol: 'DOT', price: 9.45, change: 3.12, icon: 'D' },
    { name: 'Chainlink', symbol: 'LINK', price: 18.32, change: 7.23, icon: 'L' },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Advanced <span className="text-gradient">Crypto Trading</span> Platform
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Trade smarter with real-time signals, portfolio tracking, and personalized trading plans. 
          Join thousands of successful traders today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/signals" className="btn">Start Trading with Signals</a>
          <a href="/portfolio" className="btn btn-outline">View Demo Portfolio</a>
        </div>
      </section>

      {/* Top Cryptos Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-2">Top Cryptocurrencies</h2>
        <p className="text-gray-400 mb-8">Real-time prices and 24h changes</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCryptos.map((crypto) => (
            <CryptoCard key={crypto.symbol} {...crypto} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Crypto Trading?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Trading Signals</h3>
            <p className="text-gray-300">
              Receive accurate buy/sell signals from our AI-powered analysis and expert traders.
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Portfolio Tracking</h3>
            <p className="text-gray-300">
              Monitor all your investments in one dashboard with advanced analytics and performance insights.
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Trading Plans</h3>
            <p className="text-gray-300">
              Create and follow personalized trading strategies tailored to your risk tolerance and goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;