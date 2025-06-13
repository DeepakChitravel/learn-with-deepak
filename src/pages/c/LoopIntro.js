import React from 'react';

const LoopIntro = () => {
  const points = [
    { type: 'Purpose', detail: 'Looping is used to execute a block of code multiple times.' },
    { type: 'Repetition', detail: 'It allows repeating operations until a condition becomes false.' },
    { type: 'Types of Loops', detail: 'C provides three primary types: for loop, while loop, and do-while loop.' },
    { type: 'Efficiency', detail: 'Loops reduce code duplication and improve readability.' },
    { type: 'Control Statements', detail: 'break and continue are often used to control loop execution.' },
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
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🔁 Introduction to Looping Statements in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        In C programming, loops are used to repeatedly execute a block of code as long as a specified condition is true. This helps in reducing code redundancy and simplifies repetitive tasks.
      </p>

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

export default LoopIntro;
