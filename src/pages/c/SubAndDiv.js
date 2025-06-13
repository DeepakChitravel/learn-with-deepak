// src/pages/c/SubAndDiv.js

import React from 'react';

const SubAndDiv = () => {
  const code = `
#include <stdio.h>

int main() {
    int a = 10, b = 2;
    int difference = a - b;
    float quotient = (float)a / b;
    
    printf("Difference: %d\\n", difference);
    printf("Quotient: %.2f\\n", quotient);

    return 0;
}
`.trim();

  const output = `
Difference: 8
Quotient: 5.00
`.trim();

  const points = [
    "`-` is the subtraction operator, used to find the difference between two numbers.",
    "`/` is the division operator. In C, dividing two integers yields an integer unless one is typecast.",
    "Typecasting (`(float)a`) is used to get a precise decimal result.",
    "Always cast at least one operand to `float` to avoid integer division.",
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
        Subtraction and Division in C
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

export default SubAndDiv;
