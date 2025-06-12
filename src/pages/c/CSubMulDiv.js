// src/pages/c/CSubMulDiv.js

import React from 'react';

const CSubMulDiv = () => {
  const sections = [
    {
      title: 'Subtraction',
      code: `
#include <stdio.h>

int main() {
    int a = 20, b = 8;
    int result = a - b;
    printf("Subtraction = %d", result);
    return 0;
}`.trim(),
      output: 'Subtraction = 12',
      notes: [
        '`-` subtracts the second operand from the first.',
        'Used to calculate the difference between two numbers.'
      ]
    },
    {
      title: 'Multiplication',
      code: `
#include <stdio.h>

int main() {
    int x = 6, y = 7;
    int result = x * y;
    printf("Multiplication = %d", result);
    return 0;
}`.trim(),
      output: 'Multiplication = 42',
      notes: [
        '`*` multiplies the two operands.',
        'Commonly used in loops, arrays, and mathematical logic.'
      ]
    },
    {
      title: 'Division',
      code: `
#include <stdio.h>

int main() {
    int a = 20, b = 4;
    int result = a / b;
    printf("Division = %d", result);
    return 0;
}`.trim(),
      output: 'Division = 5',
      notes: [
        '`/` divides the first operand by the second.',
        'When both operands are integers, the result is also an integer.'
      ]
    }
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
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '30px'
      }}>
        Subtraction, Multiplication & Division in C
      </h2>

      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>{section.title}</h3>

          <ul style={{ fontSize: '16px', marginBottom: '20px', paddingLeft: '20px' }}>
            {section.notes.map((note, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{note}</li>
            ))}
          </ul>

          <pre style={{
            backgroundColor: '#f4f4f4',
            padding: '15px',
            borderRadius: '6px',
            overflowX: 'auto',
            marginBottom: '20px'
          }}>
            <code>{section.code}</code>
          </pre>

          <h4 style={{ color: '#1a237e', fontSize: '18px', marginBottom: '6px' }}>Output</h4>
          <pre style={{
            backgroundColor: '#e8f5e9',
            padding: '10px',
            borderRadius: '6px'
          }}>
            <code>{section.output}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default CSubMulDiv;
