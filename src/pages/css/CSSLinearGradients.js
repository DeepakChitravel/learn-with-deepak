// src/pages/fundamentals/CSSLinearGradients.js
import React from 'react';

const CSSLinearGradients = () => {
  const code = `
/* 1. Top to Bottom */
background: linear-gradient(to bottom, #ff7e5f, #feb47b);

/* 2. Left to Right */
background: linear-gradient(to right, #4facfe, #00f2fe);

/* 3. Diagonal (Top Left to Bottom Right) */
background: linear-gradient(to bottom right, #43cea2, #185a9d);

/* 4. Angle Gradient (135deg) */
background: linear-gradient(135deg, #ff9a9e, #fad0c4);

/* 5. Repeating Gradient */
background: repeating-linear-gradient(
  45deg,
  #f6d365,
  #f6d365 10px,
  #fda085 10px,
  #fda085 20px
);
  `.trim();

  const boxStyle = (bg) => ({
    background: bg,
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
  });

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Linear Gradient Types</h2>

      <h4>CSS Code</h4>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        <code>{code}</code>
      </pre>

      <h4 style={{ marginTop: '30px' }}>Output</h4>

      <div style={boxStyle('linear-gradient(to bottom, #ff7e5f, #feb47b)')}>
        1. Top to Bottom
      </div>

      <div style={boxStyle('linear-gradient(to right, #4facfe, #00f2fe)')}>
        2. Left to Right
      </div>

      <div style={boxStyle('linear-gradient(to bottom right, #43cea2, #185a9d)')}>
        3. Diagonal (Top Left to Bottom Right)
      </div>

      <div style={boxStyle('linear-gradient(135deg, #ff9a9e, #fad0c4)')}>
        4. Angle Gradient (135deg)
      </div>

      <div style={boxStyle(
        'repeating-linear-gradient(45deg, #f6d365, #f6d365 10px, #fda085 10px, #fda085 20px)'
      )}>
        5. Repeating Gradient
      </div>
    </div>
  );
};

export default CSSLinearGradients;
