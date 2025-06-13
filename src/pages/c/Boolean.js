import React from 'react';

const Boolean = () => {
  const code = `
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isRaining = true;

    if (isRaining) {
        printf("Take an umbrella!\\n");
    } else {
        printf("Enjoy the sunshine!\\n");
    }

    return 0;
}
  `.trim();

  const output = `
Take an umbrella!
  `.trim();

  const points = [
    { type: 'Header File', detail: '`stdbool.h` enables usage of `bool`, `true`, and `false` in C.' },
    { type: 'Boolean Type', detail: '`bool` is an alias for `_Bool` and holds either `true` or `false`.' },
    { type: 'Usage', detail: 'Commonly used in conditions, comparisons, and flags in programs.' },
    { type: 'Example', detail: 'A `bool` variable `isRaining` determines which message to print.' },
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
        ✅ Boolean Type in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        C doesn’t have a built-in boolean type by default, but by including <code>&lt;stdbool.h&gt;</code>,
        we can use the `bool` type and values like `true` and `false`.
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

export default Boolean;
