import React from 'react';

const MiscOperator = () => {
  const code = `
#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int *ptr;

    // sizeof operator
    printf("Size of int: %lu bytes\\n", sizeof(int));

    // Pointer (& and *) operators
    ptr = &a;
    printf("Address of a: %p\\n", (void*)ptr);
    printf("Value pointed by ptr: %d\\n", *ptr);

    // Ternary operator
    int max = (a > b) ? a : b;
    printf("Maximum of a and b is: %d\\n", max);

    // Comma operator
    int x;
    x = (a = 5, b = 15, a + b);  // Evaluates all, returns a + b
    printf("Result of comma operator expression: %d\\n", x);

    return 0;
}
  `.trim();

  const output = `
Size of int: 4 bytes
Address of a: 0x7ffeefbff5b8
Value pointed by ptr: 10
Maximum of a and b is: 20
Result of comma operator expression: 20
  `.trim();

  const points = [
    { type: 'sizeof', detail: 'Returns the size (in bytes) of a data type or variable.' },
    { type: 'Pointer Operators', detail: '`&` gets the address, `*` gets the value at an address.' },
    { type: 'Ternary Operator', detail: 'Shorthand for `if-else` decision making: `(condition) ? value1 : value2`.' },
    { type: 'Comma Operator', detail: 'Evaluates multiple expressions and returns the last one.' },
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
        🧩 Miscellaneous Operators in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This C program demonstrates various miscellaneous operators including <code>sizeof</code>, pointer operators, the ternary operator, and the comma operator.
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🔧 Sample Code</h3>
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

export default MiscOperator;
