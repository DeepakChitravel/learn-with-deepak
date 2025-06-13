import React from 'react';

const Enum = () => {
  const code = `
#include <stdio.h>

enum days {SUN, MON, TUE};

int main() {
    enum days d = MON;
    printf("%d", d);
    return 0;
}
  `.trim();

  const output = `
1
  `.trim();

  const points = [
    { type: 'What is enum?', detail: 'An enum is a user-defined type consisting of a set of named integer constants.' },
    { type: 'Usage', detail: 'Used to assign names to integral constants to improve code readability.' },
    { type: 'Default Values', detail: 'By default, the first name gets 0, second gets 1, and so on.' },
    { type: 'Accessing enum', detail: 'You can use enum values like normal integers in C.' },
    { type: 'Compiler Translation', detail: 'Enums are replaced with their integer values during compilation.' },
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
        📚 Enum in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        <code>enum</code> in C allows the creation of named integer constants, making code more understandable and maintainable.
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Example Code</h3>
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

export default Enum;
