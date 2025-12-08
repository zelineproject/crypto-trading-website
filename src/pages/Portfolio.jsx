import React from 'react';
import PortfolioChart from '../components/PortfolioChart';
import CryptoCard from '../components/CryptoCard';

const Portfolio = () => {
  const portfolioItems = [
    { name: 'Bitcoin', symbol: 'BTC', price: 68234.15, change: 2.34, icon: '₿', amount: 0.5, value: 34117.08 },
    { name: 'Ethereum', symbol: 'ETH', price: 3456.78, change: 1.25, icon: 'Ξ', amount: 3.2, value: 11061.70 },
    { name: 'Cardano', symbol: 'ADA', price: 0.68, change: 5.67, icon: 'A', amount: 5000, value: 3400.00 },
    { name: 'Solana', symbol: 'SOL', price: 178.92, change: -0.89, icon: 'S', amount: 20, value: 3578.40 },
  ];

  const totalValue = portfolioItems.reduce((sum, item) => sum + item.value, 0);
  const totalChange = 2.1; // Simulated total portfolio change

  return (
    <div className="fade-in">
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
        <p className="text-gray-400">Track and manage your cryptocurrency investments</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-6">Portfolio Summary</h3>
          
          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">${totalValue.toLocaleString()}</div>
            <div className={`text-lg ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalChange >= 0 ? '+' : ''}{totalChange}% today
            </div>
            <div className="text-gray-400 text-sm">Total Portfolio Value</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Available Balance</span>
              <span className="font-bold">$2,450.75</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Invested</span>
              <span className="font-bold">$14,200.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Profit</span>
              <span className="font-bold text-green-400">+$2,600.75</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Risk Level</span>
              <span className="font-bold text-yellow-400">Moderate</span>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <button className="btn flex-1">Deposit</button>
            <button className="btn btn-outline flex-1">Withdraw</button>
          </div>
        </div>
      </div>

      {/* Holdings */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Holdings</h2>
          <button className="btn btn-outline">Add New Asset</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.symbol} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-400 uppercase">{item.symbol}</p>
                  </div>
                </div>
                <div className={`text-lg font-bold ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {item.change >= 0 ? '+' : ''}{item.change}%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-sm">Amount Held</div>
                  <div className="text-lg font-bold">{item.amount} {item.symbol}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Current Value</div>
                  <div className="text-lg font-bold">${item.value.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="flex justify-between gap-3">
                <button className="btn flex-1 py-2">Buy More</button>
                <button className="btn btn-outline flex-1 py-2">Sell</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Allocation Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Asset Allocation</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-64 relative">
            {/* Simplified pie chart using divs */}
            <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{clipPath: 'inset(0 0 0 50%)'}}></div>
            <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{clipPath: 'inset(0 50% 0 0)'}}></div>
            <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)'}}></div>
            <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-gray-400">Allocation</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="space-y-4">
              {[
                { color: 'bg-blue-500', name: 'Bitcoin (BTC)', percent: 40 },
                { color: 'bg-purple-500', name: 'Ethereum (ETH)', percent: 30 },
                { color: 'bg-green-500', name: 'Cardano (ADA)', percent: 20 },
                { color: 'bg-yellow-500', name: 'Solana (SOL)', percent: 10 },
              ].map((asset) => (
                <div key={asset.name} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${asset.color} mr-3`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>{asset.name}</span>
                      <span className="font-bold">{asset.percent}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full ${asset.color}`}
                        style={{ width: `${asset.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;