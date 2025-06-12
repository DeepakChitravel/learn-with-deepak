import React from 'react';

const Ternary = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5, b = 10;
  int max = (a > b) ? a : b;
  printf("Max = %d", max);
  return 0;
}
  `;
  const output = `Max = 10`;

  return (
    <div>
      <h2>Ternary Operator</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Ternary;
