// src/pages/fundamentals/AnimatedButton.js
import React from 'react';

const AnimatedButton = () => {
  const code = `
.button {
  padding: 12px 24px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #3700b3;
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
`.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>Animated Button Example</h2>

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
          .button {
            padding: 12px 24px;
            background-color: #6200ea;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
          }

          .button:hover {
            background-color: #3700b3;
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <button className="button">Hover Me</button>
    </div>
  );
};

export default AnimatedButton;
