// src/pages/c/Break.js

import React from 'react';

const Break = () => {
  const code = `
#include <stdio.h>
int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3)
      break;
    printf("%d\\n", i);
  }
  return 0;
}
`.trim();

  const output = `
1
2
`.trim();

  const infoPoints = [
    "`break` is a control statement used to exit a loop prematurely.",
    "It is commonly used in `for`, `while`, and `do-while` loops.",
    "When `break` is encountered, control exits the nearest enclosing loop.",
    "It helps in stopping iterations based on a specific condition.",
    "Useful for optimizing performance and avoiding unnecessary iterations."
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
        Break Statement in C
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {infoPoints.map((point, idx) => (
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

export default Break;
