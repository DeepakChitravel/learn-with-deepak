import React from 'react';

const Else = () => {
  const code = `
#include <stdio.h>

int main() {
    int x = 5;
    if (x > 10)
        printf("Greater");
    else
        printf("Smaller");
    return 0;
}
  `.trim();

  const output = `
Smaller
  `.trim();

  const points = [
    { type: 'What is else?', detail: 'The else statement provides an alternative block of code if the if condition is false.' },
    { type: 'Execution Flow', detail: 'If the condition is false, the else block runs.' },
    { type: 'Syntax', detail: 'Used with if to handle false conditions explicitly.' },
    { type: 'Braces', detail: 'Braces `{}` are optional for a single statement but recommended for clarity and safety.' },
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
        🔁 else Statement in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>else</code> statement is used to execute an alternative block of code when the <code>if</code> condition evaluates to false.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Example */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
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

export default Else;
