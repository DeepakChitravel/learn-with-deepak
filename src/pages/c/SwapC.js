import React from 'react';

const SwapC = () => {
  const code = `
#include <stdio.h>

int main() {
    int a, b, temp;

    // Input two numbers
    printf("Enter first number (a): ");
    scanf("%d", &a);

    printf("Enter second number (b): ");
    scanf("%d", &b);

    // Swapping logic
    temp = a;
    a = b;
    b = temp;

    // Display swapped values
    printf("After swapping:\\n");
    printf("a = %d\\n", a);
    printf("b = %d\\n", b);

    return 0;
}
  `.trim();

  const output = `
Enter first number (a): 10
Enter second number (b): 20
After swapping:
a = 20
b = 10
  `.trim();

  const points = [
    { type: 'What is Swapping?', detail: 'Swapping means exchanging the values of two variables.' },
    { type: 'Why use a temp variable?', detail: 'A temporary variable is needed to store one of the values during the exchange process.' },
    { type: 'Input Method', detail: 'scanf is used to read user input from the console.' },
    { type: 'Output Method', detail: 'printf is used to display results after swapping.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#ffffff',
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
        🔁 Swapping Two Numbers in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This program demonstrates how to swap two numbers using a temporary variable in C.
      </p>

      {/* Info Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Sample Code</h3>
      <pre style={{
        background: '#1e1e1e',
        color: '#f4f4f4',
        padding: '15px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontSize: '14px'
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

export default SwapC;
