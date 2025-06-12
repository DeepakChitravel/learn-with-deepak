import React from 'react';

const Const = () => {
  const code = `
#include <stdio.h>
int main() {
  const int a = 10;
  // a = 20; // Error: assignment of read-only variable
  printf("%d", a);
  return 0;
}
  `;
  const output = `10`;

  return (
    <div>
      <h2>const in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Const;
