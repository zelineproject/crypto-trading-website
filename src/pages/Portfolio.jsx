import React from 'react';

const Portfolio = () => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', amount: 0.5, value: 34117.08 },
    { name: 'Ethereum', symbol: 'ETH', amount: 3.2, value: 11061.70 },
    { name: 'Solana', symbol: 'SOL', amount: 20, value: 3578.40 },
  ];

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <h1 className="page-title">Portfolio</h1>
        <p className="page-description">Track and manage your cryptocurrency investments</p>

        {/* Portfolio Summary */}
        <div className="content-box">
          <h2>Portfolio Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Total Value</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>$48,757.18</div>
            </div>
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>24h Change</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>+2.34%</div>
            </div>
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Total Assets</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</div>
            </div>
          </div>
        </div>

        {/* Your Holdings */}
        <div className="content-box">
          <h2>Your Holdings</h2>
          <div style={{ marginTop: '1rem' }}>
            {assets.map((asset, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: '#334155',
                borderRadius: '8px',
                marginBottom: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {asset.symbol.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{asset.name}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{asset.amount} {asset.symbol}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${asset.value.toLocaleString()}</div>
                  <div style={{ color: '#10b981', fontSize: '0.9rem' }}>+2.1%</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3 mt-3">
            <button className="btn" style={{ flex: 1 }}>Add Funds</button>
            <button className="btn btn-outline" style={{ flex: 1 }}>Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;