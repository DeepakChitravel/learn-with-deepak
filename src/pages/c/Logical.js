import React from 'react';

const Logical = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 1, b = 0;
  printf("%d\\n", a && b); // 0
  printf("%d\\n", a || b); // 1
  printf("%d", !a);        // 0
  return 0;
}
  `;
  const output = `0\n1\n0`;

  return (
    <div>
      <h2>Logical Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Logical;
