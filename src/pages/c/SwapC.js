import React from 'react';

const SwapC = () => {
  const cCode = `
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
  `;

  const output = `
Enter first number (a): 10
Enter second number (b): 20
After swapping:
a = 20
b = 10
  `;

  return (
    <div>
      <h2>swap.c - Swap Two Numbers</h2>
      <h3>📄 C Source Code:</h3>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto' }}>
        <code>{cCode}</code>
      </pre>

      <h3>🖥️ Sample Output:</h3>
      <pre style={{ backgroundColor: '#eef', padding: '1rem', borderRadius: '5px', overflowX: 'auto' }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default SwapC;
