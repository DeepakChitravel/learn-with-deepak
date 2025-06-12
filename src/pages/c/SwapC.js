import React from 'react';

const SwapC = () => {
  const cCode = `#include <stdio.h>

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
}`;

  const output = `Enter first number (a): 10
Enter second number (b): 20
After swapping:
a = 20
b = 10`;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Swap Two Numbers in C</h2>

      <h3 style={styles.subheading}>C Source Code:</h3>
      <pre style={styles.codeBlock}>
        <code>{cCode}</code>
      </pre>

      <h3 style={styles.subheading}>Sample Output:</h3>
      <pre style={styles.outputBlock}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'monospace',
    lineHeight: '1.6'
  },
  heading: {
    textAlign: 'center',
    color: '#003366',
    marginBottom: '20px',
    fontSize: '24px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px'
  },
  subheading: {
    marginTop: '20px',
    marginBottom: '10px',
    color: '#2e7d32',
    fontSize: '18px'
  },
  codeBlock: {
    backgroundColor: '#1e1e1e',
    color: '#f8f8f2',
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto'
  },
  outputBlock: {
    backgroundColor: '#f1f8ff',
    color: '#000',
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto'
  }
};

export default SwapC;
