import React from 'react';

const Unary = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = -10;
  printf("%d", -a);
  return 0;
}
  `;
  const output = `10`;

  return (
    <div>
      <h2>Unary Operator</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Unary;
