import React, { useState } from 'react';

const TradingPlan = () => {
  const [riskLevel, setRiskLevel] = useState('moderate');
  const [dailyLossLimit, setDailyLossLimit] = useState(5);
  const [profitTarget, setProfitTarget] = useState(15);

  const tradingStrategies = [
    { name: 'Scalping', time: 'Very Short (minutes)', risk: 'High', frequency: '10-20/day', description: 'Quick trades to capture small price movements' },
    { name: 'Day Trading', time: 'Short (hours)', risk: 'Medium-High', frequency: '1-5/day', description: 'Trades opened and closed within the same day' },
    { name: 'Swing Trading', time: 'Medium (days-weeks)', risk: 'Medium', frequency: '2-10/month', description: 'Capturing price swings over several days' },
    { name: 'Position Trading', time: 'Long (weeks-months)', risk: 'Low-Medium', frequency: '1-3/month', description: 'Long-term trades based on fundamental analysis' },
  ];

  const planSteps = [
    { step: 1, title: 'Define Your Goals', description: 'Set clear financial targets and timeframes for your trading activities.' },
    { step: 2, title: 'Assess Risk Tolerance', description: 'Determine how much capital you can risk per trade based on your financial situation.' },
    { step: 3, title: 'Choose Trading Strategy', description: 'Select a trading style that matches your personality, time availability, and goals.' },
    { step: 4, title: 'Set Entry & Exit Rules', description: 'Establish clear criteria for entering and exiting trades to remove emotion.' },
    { step: 5, title: 'Implement Risk Management', description: 'Use stop-loss orders and position sizing to protect your capital.' },
    { step: 6, title: 'Review & Adjust', description: 'Regularly analyze your trades and adjust your plan based on performance.' },
  ];

  return (
    <div className="fade-in">
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-2">Trading Plan</h1>
        <p className="text-gray-400">Create and manage your personalized cryptocurrency trading strategy</p>
      </div>

      {/* Current Plan Summary */}
      <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-xl p-8 border border-gray-700 mb-12">
        <h2 className="text-2xl font-bold mb-6">Your Current Trading Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Risk Level</h3>
            <div className="text-3xl font-bold mb-2 capitalize">{riskLevel}</div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${
                  riskLevel === 'conservative' ? 'bg-green-500 w-1/3' : 
                  riskLevel === 'moderate' ? 'bg-yellow-500 w-2/3' : 
                  'bg-red-500 w-full'
                }`}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Conservative</span>
              <span>Moderate</span>
              <span>Aggressive</span>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Daily Loss Limit</h3>
            <div className="text-3xl font-bold mb-2">{dailyLossLimit}%</div>
            <p className="text-gray-300 text-sm">
              Maximum loss allowed per trading day before stopping trading.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Monthly Profit Target</h3>
            <div className="text-3xl font-bold mb-2">{profitTarget}%</div>
            <p className="text-gray-300 text-sm">
              Realistic profit goal based on your strategy and market conditions.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn">Edit Trading Plan</button>
        </div>
      </div>

      {/* Trading Strategies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Select Your Trading Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradingStrategies.map((strategy) => (
            <div key={strategy.name} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4">{strategy.name}</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-gray-400 text-sm">Time Horizon</div>
                  <div className="font-medium">{strategy.time}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Risk Level</div>
                  <div className="font-medium">{strategy.risk}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Trade Frequency</div>
                  <div className="font-medium">{strategy.frequency}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6">{strategy.description}</p>
              <button className="btn btn-outline w-full">Select Strategy</button>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Creation Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Create Your Trading Plan in 6 Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planSteps.map((step) => (
            <div key={step.step} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Management Calculator */}
      <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Position Size Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-6">
              Calculate the optimal position size based on your account balance, risk per trade, and stop loss distance.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Account Balance ($)</label>
                <input 
                  type="number" 
                  defaultValue="10000"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Risk Per Trade (%)</label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="5" 
                  step="0.5" 
                  defaultValue="2"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>0.5%</span>
                  <span>2%</span>
                  <span>5%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Stop Loss Distance (%)</label>
                <input 
                  type="number" 
                  defaultValue="5"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">$400</div>
              <div className="text-xl font-bold mb-2">Recommended Position Size</div>
              <p className="text-gray-300">
                Based on your inputs, you should risk $200 (2%) on this trade with a 5% stop loss.
              </p>
              <div className="mt-8 p-4 bg-gray-900/50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Risk Amount:</span>
                  <span className="font-bold">$200</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Position Size:</span>
                  <span className="font-bold">$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Units to Buy:</span>
                  <span className="font-bold">0.058 BTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Download */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Download Your Trading Plan</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Once you've customized your trading plan, download it as a PDF to reference and update regularly.
        </p>
        <button className="btn inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF Plan
        </button>
      </div>
    </div>
  );
};

export default TradingPlan;