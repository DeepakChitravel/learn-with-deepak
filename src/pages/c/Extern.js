import React from 'react';

const Extern = () => {
  const code = `
// File1.c
int x = 10;

// File2.c
#include <stdio.h>
extern int x;

int main() {
    printf("%d", x);
    return 0;
}
  `.trim();

  const output = `
10
  `.trim();

  const points = [
    { type: 'What is extern?', detail: '`extern` is a keyword used to declare a global variable defined in another file.' },
    { type: 'Scope', detail: 'Makes a variable accessible across multiple files in a C program.' },
    { type: 'No Memory Allocation', detail: '`extern` does not allocate memory; it only provides a reference.' },
    { type: 'Use Case', detail: 'Ideal for sharing global variables across source files in modular programs.' },
    { type: 'Compilation Note', detail: 'Both files must be compiled together: e.g., `gcc File1.c File2.c`' },
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
        🌐 <code>extern</code> Keyword in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>extern</code> keyword is used to declare a global variable in another file. It allows variables to be shared across files in a modular C program.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Example Code (Two Files)</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
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

export default Extern;
