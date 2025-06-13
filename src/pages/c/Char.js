// src/pages/c/Char.js

import React from 'react';

const Char = () => {
  const code = `
#include <stdio.h>
int main() {
  char c = 'A';
  printf("%c", c);
  return 0;
}
  `.trim();

  const output = `A`;

  const infoPoints = [
    "`char` is a data type in C used to store single characters.",
    "Characters are enclosed in single quotes, e.g., `'A'`.",
    "A `char` typically takes 1 byte of memory.",
    "`%c` is the format specifier used in `printf()` to print a character.",
    "Characters in C are internally represented using ASCII values."
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Character Type in C (`char`)
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {infoPoints.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Sample Code</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        backgroundColor: '#e8f5e9',
        padding: '10px',
        borderRadius: '6px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default Char;
