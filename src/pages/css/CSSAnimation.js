// src/pages/fundamentals/CSSAnimation.js
import React from 'react';

const CSSAnimation = () => {
  const code = `
/* 1. Define keyframes */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

@keyframes colorChange {
  0%   { background-color: #f44336; }
  50%  { background-color: #2196f3; }
  100% { background-color: #4caf50; }
}

/* 2. Apply animation */
.animate-box {
  width: 100px;
  height: 100px;
  background-color: #f44336;
  margin: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  animation-name: bounce;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}

/* 3. Color changing box */
.color-box {
  animation-name: colorChange;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
`.trim();

  const boxStyle = {
    width: '100px',
    height: '100px',
    margin: '20px',
    borderRadius: '8px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Animation Properties</h2>

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

      <style>
        {`
          @keyframes bounce {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-50px); }
            100% { transform: translateY(0); }
          }

          @keyframes colorChange {
            0%   { background-color: #f44336; }
            50%  { background-color: #2196f3; }
            100% { background-color: #4caf50; }
          }

          .animate-box {
            animation-name: bounce;
            animation-duration: 2s;
            animation-delay: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
          }

          .color-box {
            animation-name: colorChange;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
        `}
      </style>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="animate-box" style={{ ...boxStyle, backgroundColor: '#f44336' }}>
          Bounce
        </div>
        <div className="color-box" style={{ ...boxStyle }}>
          Color
        </div>
      </div>
    </div>
  );
};

export default CSSAnimation;
