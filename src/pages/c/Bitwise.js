import React from 'react';

const Bitwise = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5, b = 3;
  printf("%d\\n", a & b); // 1
  printf("%d\\n", a | b); // 7
  printf("%d", a ^ b);    // 6
  return 0;
}
  `;
  const output = `1\n7\n6`;

  return (
    <div>
      <h2>Bitwise Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Bitwise;
