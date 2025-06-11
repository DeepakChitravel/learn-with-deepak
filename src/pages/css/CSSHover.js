// src/pages/fundamentals/CSSHover.js
import React from 'react';

const CSSHover = () => {
  const code = `
.hover-button {
  background-color: #2196F3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hover-button:hover {
  background-color: #0b7dda;
}

.hover-box {
  width: 150px;
  height: 150px;
  background-color: #4CAF50;
  transition: transform 0.3s ease;
  margin-top: 20px;
}

.hover-box:hover {
  transform: scale(1.1);
  background-color: #45a049;
}
  `.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Hover Example</h2>

      {/* Code Display */}
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

      {/* Output Section */}
      <h4 style={{ marginTop: '30px' }}>Output</h4>
      <div style={{ marginTop: '10px' }}>
        <button
          className="hover-button"
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => (e.target.style.backgroundColor = '#0b7dda')}
          onMouseOut={e => (e.target.style.backgroundColor = '#2196F3')}
        >
          Hover Me
        </button>

        <div
          className="hover-box"
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#4CAF50',
            marginTop: '20px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          }}
          onMouseOver={e => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#45a049';
          }}
          onMouseOut={e => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#4CAF50';
          }}
        ></div>
      </div>
    </div>
  );
};

export default CSSHover;
