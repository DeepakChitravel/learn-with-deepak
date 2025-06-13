import React from 'react';

const GotoStatement = () => {
  const code = `
#include <stdio.h>

int main() {
    int number = 3;

    if (number < 5)
        goto small;

    printf("Number is 5 or more\\n");

    small:
    printf("Number is less than 5\\n");

    return 0;
}
  `.trim();

  const output = `
Number is less than 5
  `.trim();

  const points = [
    { type: 'What is goto?', detail: 'The `goto` statement allows control to jump to a labeled statement.' },
    { type: 'Use Case', detail: 'It is generally used to break out of deeply nested loops or in error handling.' },
    { type: 'Label Syntax', detail: 'Labels are defined with a name followed by a colon (e.g., `small:`).' },
    { type: 'Caution', detail: 'Overusing `goto` can make code harder to understand and maintain.' }
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
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🔀 Goto Statement in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The `goto` statement in C is used to jump to another part of the program using labels.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Block */}
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

      {/* Output */}
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

export default GotoStatement;
