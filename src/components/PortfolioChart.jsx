import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PortfolioChart = () => {
  const data = [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 6200 },
    { month: 'Mar', value: 7800 },
    { month: 'Apr', value: 9200 },
    { month: 'May', value: 10500 },
    { month: 'Jun', value: 14200 },
    { month: 'Jul', value: 16800 },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold mb-6">Portfolio Growth</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#F3F4F6' }}
              formatter={(value) => [`$${value}`, 'Portfolio Value']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              fill="url(#colorValue)" 
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
          <div className="text-2xl font-bold text-green-400">+68%</div>
          <div className="text-gray-400">YTD Return</div>
        </div>
        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
          <div className="text-2xl font-bold">$16,800</div>
          <div className="text-gray-400">Current Value</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChart;