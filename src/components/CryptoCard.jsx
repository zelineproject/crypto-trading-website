import React from 'react';

const CryptoCard = ({ name, symbol, price, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <div className="crypto-icon">{icon}</div>
        <div className="crypto-info">
          <h3>{name}</h3>
          <div className="crypto-symbol">{symbol}</div>
        </div>
      </div>
      
      <div className="crypto-price">${price.toLocaleString()}</div>
      
      <div className={`crypto-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : ''}{change}%
      </div>
    </div>
  );
};

export default CryptoCard;