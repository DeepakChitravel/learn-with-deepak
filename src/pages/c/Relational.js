import React from 'react';

const Relational = () => {
  const code = `
#include <stdio.h>

int main() {
    int a = 5, b = 10;

    printf("%d\\n", a < b);   // true (1)
    printf("%d\\n", a == b);  // false (0)
    printf("%d", a != b);     // true (1)

    return 0;
}
  `.trim();

  const output = `
1
0
1
  `.trim();

  const points = [
    { type: '< (Less than)', detail: 'Returns true if the left operand is less than the right.' },
    { type: '== (Equal to)', detail: 'Returns true if both operands are equal.' },
    { type: '!= (Not equal to)', detail: 'Returns true if operands are not equal.' },
    { type: 'Relational Logic', detail: 'Used to compare two values and return a boolean result.' },
    { type: 'Use Case', detail: 'Commonly used in decision-making constructs like if, while, and for loops.' },
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
        🔁 Relational Operators in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Relational operators compare two values and return a boolean result — true (1) or false (0).
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

export default Relational;
