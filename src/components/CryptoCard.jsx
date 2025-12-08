import React from 'react';

const CryptoCard = ({ name, symbol, price, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
            <span className="text-white font-bold text-xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-400 uppercase">{symbol}</p>
          </div>
        </div>
        <div className={`text-lg font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold mb-1">${price.toLocaleString()}</div>
        <div className="text-gray-400 text-sm">Current Price</div>
      </div>
      
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: `${Math.min(Math.abs(change) * 5, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CryptoCard;