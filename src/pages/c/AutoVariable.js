import React from 'react';

const AutoVariable = () => {
  const code = `
#include <stdio.h>

void showCount() {
    auto int count = 0;  // auto is optional in modern C
    count++;
    printf("Count = %d\\n", count);
}

int main() {
    showCount();
    showCount();
    showCount();
    return 0;
}
  `.trim();

  const output = `
Count = 1
Count = 1
Count = 1
  `.trim();

  const points = [
    { type: 'What is an Automatic Variable?', detail: 'A local variable that is automatically created when the function is called and destroyed when the function exits.' },
    { type: 'Storage Class', detail: 'The `auto` keyword indicates automatic storage duration (default for local variables).' },
    { type: 'Scope', detail: 'Only accessible within the block where it’s defined.' },
    { type: 'Behavior', detail: 'It resets every time the function is called.' },
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
        🔄 Automatic Variable in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Automatic variables are local to the function and automatically created/destroyed. By default, all local variables are automatic.
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

export default AutoVariable;
