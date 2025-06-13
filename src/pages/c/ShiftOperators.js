import React from 'react';

const ShiftOperators = () => {
  const code = `
#include <stdio.h>

int main() {
    int num = 8;

    printf("Original number: %d\\n", num);
    printf("Left Shift by 1: %d\\n", num << 1);  // 8 * 2 = 16
    printf("Right Shift by 1: %d\\n", num >> 1); // 8 / 2 = 4

    return 0;
}
  `.trim();

  const output = `
Original number: 8
Left Shift by 1: 16
Right Shift by 1: 4
  `.trim();

  const points = [
    { type: 'What are Shift Operators?', detail: 'They move bits to the left or right within a number.' },
    { type: 'Left Shift (<<)', detail: 'Moves bits to the left and fills with 0s on the right. Equivalent to multiplying by 2.' },
    { type: 'Right Shift (>>)', detail: 'Moves bits to the right. Equivalent to dividing by 2 (ignores remainder).' },
    { type: 'Use Case', detail: 'Used in optimization, bitwise manipulation, and low-level programming.' },
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
        🔀 Shift Operators in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Shift operators are used to shift bits of a variable left or right. They are commonly used in low-level programming and optimization.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px',
        whiteSpace: 'pre-wrap'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default ShiftOperators;
