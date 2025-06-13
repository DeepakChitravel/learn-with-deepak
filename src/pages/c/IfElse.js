import React from 'react';

const IfElse = () => {
  const code = `
#include <stdio.h>

int main() {
    int number = 10;

    if (number > 0) {
        printf("Number is positive.\\n");
    } else {
        printf("Number is not positive.\\n");
    }

    return 0;
}
  `.trim();

  const output = `
Number is positive.
  `.trim();

  const points = [
    { type: 'What is if...else?', detail: 'A control structure used to execute a block of code based on a condition.' },
    { type: 'if block', detail: 'Executes if the condition evaluates to true.' },
    { type: 'else block', detail: 'Executes if the condition evaluates to false.' },
    { type: 'Syntax', detail: 'if (condition) { /* true block */ } else { /* false block */ }' },
    { type: 'Multiple Conditions', detail: 'Use else if to check multiple conditions.' },
    { type: 'Use Case', detail: 'Commonly used in decision-making like comparing numbers, checking status, etc.' },
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
        🔀 if...else in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>if...else</code> statement in C is used for conditional execution of code blocks based on whether a condition evaluates to true or false.
      </p>

      {/* Points */}
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

export default IfElse;
