import React from 'react';

const ExternVariable = () => {
  const code = `
// File: main.c
#include <stdio.h>

extern int count;  // Declaration of external variable

void showCount() {
    count++;
    printf("Count = %d\\n", count);
}

int count = 0;  // Definition of external variable

int main() {
    showCount();
    showCount();
    showCount();
    return 0;
}
  `.trim();

  const output = `
Count = 1
Count = 2
Count = 3
  `.trim();

  const points = [
    { type: 'What is an External Variable?', detail: 'A variable defined outside of any function and accessible globally across multiple files (if declared with `extern`).' },
    { type: 'Declaration', detail: 'The `extern` keyword is used to declare a global variable from another file or scope.' },
    { type: 'Scope', detail: 'Global scope across the entire program.' },
    { type: 'Use Case', detail: 'Used to share variables between different C source files.' },
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
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🌐 External Variable in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        External variables are defined outside of all functions and can be accessed across multiple files using the <code>extern</code> keyword.
      </p>

      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px'
      }}>
        <code>{code}</code>
      </pre>

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

export default ExternVariable;
