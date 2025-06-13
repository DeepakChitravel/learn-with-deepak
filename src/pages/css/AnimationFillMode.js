// src/pages/fundamentals/AnimationFillMode.js
import React from 'react';

const AnimationFillMode = () => {
  const code = `
@keyframes moveRight {
  0% {
    transform: translateX(0);
    background-color: #2196f3;
  }
  100% {
    transform: translateX(150px);
    background-color: #f44336;
  }
}

.box {
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #2196f3;
  animation-name: moveRight;
  animation-duration: 2s;
}

.none { animation-fill-mode: none; }
.forwards { animation-fill-mode: forwards; }
.backwards { animation-fill-mode: backwards; }
.both { animation-fill-mode: both; }
`.trim();

  const boxStyle = {
    width: '100px',
    height: '100px',
    margin: '10px',
    backgroundColor: '#2196f3',
    animationName: 'moveRight',
    animationDuration: '2s',
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Animation Fill Mode</h2>

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
          @keyframes moveRight {
            0% {
              transform: translateX(0);
              background-color: #2196f3;
            }
            100% {
              transform: translateX(150px);
              background-color: #f44336;
            }
          }

          .box {
            width: 100px;
            height: 100px;
            margin: 10px;
            background-color: #2196f3;
            animation-name: moveRight;
            animation-duration: 2s;
          }

          .none { animation-fill-mode: none; }
          .forwards { animation-fill-mode: forwards; }
          .backwards { animation-fill-mode: backwards; }
          .both { animation-fill-mode: both; }
        `}
      </style>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="box none">none</div>
        <div className="box forwards">forwards</div>
        <div className="box backwards">backwards</div>
        <div className="box both">both</div>
      </div>
    </div>
  );
};

export default AnimationFillMode;
