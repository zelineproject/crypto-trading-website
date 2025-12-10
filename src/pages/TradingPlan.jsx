import React from 'react';

const TradingPlan = () => {
  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <h1 className="page-title">Trading Plan</h1>
        <p className="page-description">Create and manage your personalized cryptocurrency trading strategy</p>

        <div className="content-box">
          <h2>Your Current Trading Plan</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#334155', padding: '1.5rem', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '1rem', color: '#f8fafc' }}>Risk Level</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>Moderate</div>
              <div style={{ height: '8px', background: '#475569', borderRadius: '4px', marginTop: '0.5rem', overflow: 'hidden' }}>
                <div style={{ width: '60%', height: '100%', background: '#fbbf24' }}></div>
              </div>
            </div>
            
            <div style={{ background: '#334155', padding: '1.5rem', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '1rem', color: '#f8fafc' }}>Daily Loss Limit</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>5%</div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Maximum loss per day</p>
            </div>
            
            <div style={{ background: '#334155', padding: '1.5rem', borderRadius: '10px' }}>
              <h3 style={{ marginBottom: '1rem', color: '#f8fafc' }}>Monthly Target</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981' }}>15%</div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Profit target</p>
            </div>
          </div>
          
          <div className="text-center mt-3">
            <button className="btn">Edit Trading Plan</button>
          </div>
        </div>

        <div className="content-box">
          <h2>Trading Strategies</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Choose a strategy that fits your trading style</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {['Scalping', 'Day Trading', 'Swing Trading', 'Position Trading'].map((strategy, index) => (
              <div key={index} style={{
                background: '#334155',
                padding: '1.5rem',
                borderRadius: '10px',
                border: '1px solid #475569',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>{strategy}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  {strategy === 'Scalping' && 'Quick trades for small profits'}
                  {strategy === 'Day Trading' && 'Buy and sell within same day'}
                  {strategy === 'Swing Trading' && 'Hold for several days to weeks'}
                  {strategy === 'Position Trading' && 'Long-term investment strategy'}
                </p>
                <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}>
                  Select Strategy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPlan;