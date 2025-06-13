import React from 'react';

const RightShift = () => {
  const code = `
#include <stdio.h>

int main() {
    int num = 20;

    printf("Original number: %d\\n", num);
    printf("After right shift by 1: %d\\n", num >> 1);

    return 0;
}
  `.trim();

  const output = `
Original number: 20
After right shift by 1: 10
  `.trim();

  const points = [
    { type: 'Operator', detail: '>> (Right Shift)' },
    { type: 'Meaning', detail: 'Shifts bits to the right and discards the rightmost bit' },
    { type: 'Effect', detail: 'Each right shift divides the number by 2 (integer division)' },
    { type: 'Example', detail: '20 (10100) becomes 10 (1010)' },
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
        ⏪ Right Shift Operator in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The right shift operator shifts the bits of a number to the right. It divides the number by 2 for each shift.
      </p>

      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

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

export default RightShift;
