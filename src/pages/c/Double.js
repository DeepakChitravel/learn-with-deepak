import React from 'react';

const Double = () => {
  const code = `
#include <stdio.h>

int main() {
    double pi = 3.14159;
    printf("%lf", pi);
    return 0;
}
  `.trim();

  const output = `3.141590`;

  const points = [
    { type: 'What is double?', detail: 'A data type in C used to store floating-point numbers with double precision.' },
    { type: 'Size', detail: 'Typically occupies 8 bytes in memory (may vary depending on system).' },
    { type: 'Precision', detail: 'Can store up to 15-16 digits after the decimal point.' },
    { type: 'Format Specifier', detail: 'Use `%lf` in `printf()` to display a double value.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
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
        double in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>double</code> keyword in C defines a variable that holds a floating-point number with **double precision**.
        It is used when more precision than <code>float</code> is needed for calculations.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default Double;
