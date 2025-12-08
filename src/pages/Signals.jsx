import React, { useState } from 'react';
import SignalCard from '../components/SignalCard';

const Signals = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const signals = [
    { crypto: 'Bitcoin (BTC)', type: 'BUY', entry: 67500, target: 72000, stoploss: 65000, timeframe: '4H', status: 'active' },
    { crypto: 'Ethereum (ETH)', type: 'BUY', entry: 3400, target: 3800, stoploss: 3200, timeframe: '1D', status: 'active' },
    { crypto: 'Solana (SOL)', type: 'SELL', entry: 180, target: 165, stoploss: 190, timeframe: '1H', status: 'closed' },
    { crypto: 'Cardano (ADA)', type: 'BUY', entry: 0.65, target: 0.75, stoploss: 0.60, timeframe: '4H', status: 'active' },
    { crypto: 'Polkadot (DOT)', type: 'BUY', entry: 9.2, target: 10.5, stoploss: 8.5, timeframe: '1D', status: 'active' },
    { crypto: 'Chainlink (LINK)', type: 'SELL', entry: 18.5, target: 16.8, stoploss: 19.5, timeframe: '4H', status: 'closed' },
  ];

  const filteredSignals = activeTab === 'all' 
    ? signals 
    : signals.filter(signal => 
        activeTab === 'active' ? signal.status === 'active' : signal.status === 'closed'
      );

  return (
    <div className="fade-in">
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">Trading Signals</h1>
        <p className="text-gray-400">Real-time buy/sell signals with detailed analysis</p>
      </div>

      {/* Signal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-800/30 rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">24</div>
          <div className="text-gray-300">Active Signals</div>
          <div className="text-blue-400 text-sm mt-2">+3 this week</div>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-800/30 rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">78%</div>
          <div className="text-gray-300">Success Rate</div>
          <div className="text-green-400 text-sm mt-2">Last 30 days</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-800/30 rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">142</div>
          <div className="text-gray-300">Signals This Month</div>
          <div className="text-purple-400 text-sm mt-2">Avg: 5/day</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 border border-yellow-800/30 rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">4.8★</div>
          <div className="text-gray-300">User Rating</div>
          <div className="text-yellow-400 text-sm mt-2">Based on 2.4k reviews</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-8">
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'all' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('all')}
        >
          All Signals
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'active' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'closed' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('closed')}
        >
          Closed
        </button>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {filteredSignals.map((signal, index) => (
          <SignalCard key={index} {...signal} />
        ))}
      </div>

      {/* How to Use Signals */}
      <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Use Trading Signals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-4">1</div>
            <h3 className="text-xl font-bold mb-3">Receive Signal</h3>
            <p className="text-gray-300">
              Get notified when our AI system or expert traders identify a high-probability trading opportunity.
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-4">2</div>
            <h3 className="text-xl font-bold mb-3">Analyze Entry Points</h3>
            <p className="text-gray-300">
              Review the suggested entry price, stop loss, and take profit levels based on technical analysis.
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-4">3</div>
            <h3 className="text-xl font-bold mb-3">Execute & Monitor</h3>
            <p className="text-gray-300">
              Place your trade and set alerts for target prices. Monitor the trade and adjust if necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="text-center py-12 bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-2xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Premium Signals Access</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Upgrade to our premium plan for exclusive signals, advanced analytics, and priority notifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
            <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All premium trading signals
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Real-time alerts & notifications
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced analytics & insights
              </li>
            </ul>
            <button className="btn w-full">Upgrade Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signals;