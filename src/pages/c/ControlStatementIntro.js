import React from 'react';

const ControlStatementIntro = () => {
  const points = [
    {
      type: 'Conditional Statements',
      detail: 'Used to make decisions: `if`, `if-else`, `nested if`, `switch`.'
    },
    {
      type: 'Looping Statements',
      detail: 'Used to repeat a block of code: `for`, `while`, `do-while`.'
    },
    {
      type: 'Jump Statements',
      detail: 'Used to change the flow: `break`, `continue`, `goto`, `return`.'
    }
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🔄 Introduction to Control Statements in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Control statements in C allow you to dictate the flow of your program. They help in making decisions, looping through data, and jumping from one part of the code to another.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControlStatementIntro;
