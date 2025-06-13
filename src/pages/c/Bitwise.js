// src/pages/c/Bitwise.js

import React from 'react';

const Bitwise = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5, b = 3;
  printf("%d\\n", a & b); // 1
  printf("%d\\n", a | b); // 7
  printf("%d", a ^ b);    // 6
  return 0;
}
`.trim();

  const output = `
1
7
6
`.trim();

  const points = [
    "Bitwise operators operate directly on binary representations of integers.",
    "`&` (Bitwise AND): Returns 1 only if both bits are 1.",
    "`|` (Bitwise OR): Returns 1 if at least one of the bits is 1.",
    "`^` (Bitwise XOR): Returns 1 if only one of the bits is 1 (exclusive OR).",
    "They are efficient for operations involving flags, bit masking, and embedded systems.",
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
        Bitwise Operators in C
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code Block */}
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

      {/* Output Block */}
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

export default Bitwise;
