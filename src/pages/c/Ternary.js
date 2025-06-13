// src/pages/c/Ternary.js

import React from 'react';

const Ternary = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5, b = 10;
  int max = (a > b) ? a : b;
  printf("Max = %d", max);
  return 0;
}
`.trim();

  const output = `Max = 10`;

  const points = [
    "The ternary operator is a shorthand for an `if-else` condition.",
    "Syntax: `condition ? expression_if_true : expression_if_false`.",
    "It evaluates the condition and returns one of two values.",
    "Useful for simple conditional assignments.",
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
        Ternary Operator in C
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

export default Ternary;
