import React from 'react';

const Arithmetic = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 10, b = 3;
  printf("Sum = %d\\n", a + b);
  printf("Diff = %d\\n", a - b);
  printf("Mul = %d\\n", a * b);
  printf("Div = %d\\n", a / b);
  printf("Mod = %d", a % b);
  return 0;
}
  `;
  const output = `Sum = 13\nDiff = 7\nMul = 30\nDiv = 3\nMod = 1`;

  return (
    <div>
      <h2>Arithmetic Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Arithmetic;
