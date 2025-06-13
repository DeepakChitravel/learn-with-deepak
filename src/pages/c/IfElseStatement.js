import React from 'react';

const IfElseStatement = () => {
  const code = `
#include <stdio.h>

int main() {
    int num = -5;

    if (num > 0) {
        printf("The number is positive.\n");
    } else {
        printf("The number is not positive.\n");
    }

    return 0;
}
  `.trim();

  const output = `
The number is not positive.
  `.trim();

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
        🔁 If-Else Statement in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>if-else</code> statement allows the program to execute one block of code if a condition is true, and another if it's false.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Sample Code</h3>
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

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
      <pre style={{
        backgroundColor: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default IfElseStatement;
