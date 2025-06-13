import React from 'react';

const Default = () => {
  const code = `
#include <stdio.h>

int main() {
    int num = 3;
    switch (num) {
        case 1: 
            printf("One"); 
            break;
        case 2: 
            printf("Two"); 
            break;
        default: 
            printf("Other");
    }
    return 0;
}
  `.trim();

  const output = `
Other
  `.trim();

  const points = [
    { type: 'What is default?', detail: 'The default statement is executed if no case matches in a switch block.' },
    { type: 'Position', detail: 'It can appear anywhere inside the switch but is usually placed at the end.' },
    { type: 'Usage', detail: 'Acts like the else in if-else statements.' },
    { type: 'Optional', detail: 'The default is optional but recommended for handling unexpected values.' },
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
        🧭 default Statement in C (switch)
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>default</code> statement is used within a <code>switch</code> to define a block of code that executes when no matching <code>case</code> is found.
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Sample Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
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

export default Default;
