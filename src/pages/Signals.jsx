import React from 'react';

const Signals = () => {
  const signals = [
    { crypto: 'Bitcoin (BTC)', type: 'BUY', entry: '68,234', target: '72,000', status: 'active' },
    { crypto: 'Ethereum (ETH)', type: 'BUY', entry: '3,456', target: '3,800', status: 'active' },
    { crypto: 'Solana (SOL)', type: 'SELL', entry: '178', target: '165', status: 'closed' },
  ];

  return (
    <div className="container">
      <div style={{ padding: '2rem 0' }}>
        <h1 className="page-title">Trading Signals</h1>
        <p className="page-description">Real-time buy/sell signals with detailed analysis</p>

        <div className="content-box">
          <h2>Active Signals</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Updated in real-time</p>
          
          <div style={{ marginTop: '1rem' }}>
            {signals.map((signal, index) => (
              <div key={index} style={{
                background: '#334155',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: signal.status === 'active' ? '1px solid #3b82f6' : '1px solid #334155'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: signal.status === 'active' ? '#10b981' : '#94a3b8'
                      }}></div>
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: signal.status === 'active' ? '#10b981' : '#94a3b8'
                      }}>
                        {signal.status.toUpperCase()}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{signal.crypto}</h3>
                  </div>
                  <div style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    background: signal.type === 'BUY' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: signal.type === 'BUY' ? '#10b981' : '#ef4444',
                    fontWeight: 'bold'
                  }}>
                    {signal.type}
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Entry Price</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${signal.entry}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Target Price</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#10b981' }}>${signal.target}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    Updated: Today
                  </div>
                  {signal.status === 'active' && (
                    <button className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                      Set Alert
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signals;