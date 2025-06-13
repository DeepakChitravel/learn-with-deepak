// src/pages/c/IncrementDecrement.js

import React from 'react';

const IncrementDecrement = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5;
  printf("%d\\n", a++); // prints 5
  printf("%d", ++a);    // now a is 7
  return 0;
}
`.trim();

  const output = `
5
7
`.trim();

  const points = [
    "Increment (`++`) and decrement (`--`) are unary operators in C.",
    "`a++` is post-increment: uses `a` then increases it.",
    "`++a` is pre-increment: increases `a` then uses it.",
    "Same logic applies to decrement (`a--` and `--a`).",
    "Commonly used in loops, counters, and algorithms.",
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
        Increment / Decrement Operators in C
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

export default IncrementDecrement;
