import React from 'react';

const SignalCard = ({ crypto, type, entry, target, stoploss, timeframe, status }) => {
  const isActive = status === 'active';
  
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border ${isActive ? 'border-blue-500/50' : 'border-gray-700'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center mb-2">
            <div className={`w-3 h-3 rounded-full mr-2 ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className={`text-sm font-semibold ${isActive ? 'text-green-400' : 'text-gray-400'}`}>
              {isActive ? 'ACTIVE' : 'CLOSED'}
            </span>
          </div>
          <h3 className="text-xl font-bold">{crypto}</h3>
          <p className="text-gray-400">Timeframe: {timeframe}</p>
        </div>
        <div className={`px-4 py-2 rounded-full ${type === 'BUY' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
          {type}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <div className="text-gray-400 text-sm">Entry Price</div>
          <div className="text-lg font-bold">${entry}</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <div className="text-gray-400 text-sm">Target Price</div>
          <div className="text-lg font-bold">${target}</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <div className="text-gray-400 text-sm">Stop Loss</div>
          <div className="text-lg font-bold">${stoploss}</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <div className="text-gray-400 text-sm">Potential Profit</div>
          <div className="text-lg font-bold text-green-400">+{((target - entry) / entry * 100).toFixed(1)}%</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          Updated: {new Date().toLocaleDateString()}
        </div>
        {isActive && (
          <button className="btn btn-outline py-2 px-4 text-sm">
            Set Alert
          </button>
        )}
      </div>
    </div>
  );
};

export default SignalCard;