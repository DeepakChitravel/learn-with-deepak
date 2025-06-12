import React from 'react';

const Relational = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5, b = 10;
  printf("%d\\n", a < b);   // 1
  printf("%d\\n", a == b);  // 0
  printf("%d", a != b);     // 1
  return 0;
}
  `;
  const output = `1\n0\n1`;

  return (
    <div>
      <h2>Relational Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Relational;
