// src/pages/fundamentals/CSSTransition.js
import React from 'react';

const CSSTransition = () => {
  const code = `
.transition-box {
  width: 150px;
  height: 150px;
  background-color: tomato;
  transition: all 0.5s ease;
}

.transition-box:hover {
  background-color: dodgerblue;
  transform: rotate(10deg) scale(1.1);
  border-radius: 20px;
}
  `.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Transition Example</h2>

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
      <div
        className="transition-box"
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: 'tomato',
          transition: 'all 0.5s ease',
          marginTop: '10px',
        }}
        onMouseOver={e => {
          e.target.style.backgroundColor = 'dodgerblue';
          e.target.style.transform = 'rotate(10deg) scale(1.1)';
          e.target.style.borderRadius = '20px';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = 'tomato';
          e.target.style.transform = 'rotate(0deg) scale(1)';
          e.target.style.borderRadius = '0px';
        }}
      ></div>
    </div>
  );
};

export default CSSTransition;

