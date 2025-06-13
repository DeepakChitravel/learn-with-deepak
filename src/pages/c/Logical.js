import React from 'react';

const Logical = () => {
  const code = `
#include <stdio.h>

int main() {
    int a = 1, b = 0;

    printf("%d\\n", a && b); // Logical AND: false (0)
    printf("%d\\n", a || b); // Logical OR: true (1)
    printf("%d", !a);        // Logical NOT: false (0)

    return 0;
}
`.trim();

  const output = `
0
1
0
`.trim();

  const points = [
    { type: '&& (Logical AND)', detail: 'Returns true (1) only if both operands are true.' },
    { type: '|| (Logical OR)', detail: 'Returns true (1) if at least one operand is true.' },
    { type: '! (Logical NOT)', detail: 'Reverses the logical state of its operand.' },
    { type: 'Boolean Logic', detail: 'Logical operators evaluate expressions to either 0 (false) or 1 (true).' },
    { type: 'Use Case', detail: 'Often used in conditions and loops to combine multiple logical expressions.' }
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
        🔗 Logical Operators in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Logical operators are used to perform logical operations on expressions. They return either true (1) or false (0).
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

export default Logical;
