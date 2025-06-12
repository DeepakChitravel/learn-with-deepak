import React from 'react';

const IncrementDecrement = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5;
  printf("%d\\n", a++); // prints 5
  printf("%d", ++a);    // now a is 7
  return 0;
}
  `;
  const output = `5\n7`;

  return (
    <div>
      <h2>Increment / Decrement Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default IncrementDecrement;
