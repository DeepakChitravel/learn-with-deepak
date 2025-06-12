import React from 'react';

const Char = () => {
  const code = `
#include <stdio.h>
int main() {
  char c = 'A';
  printf("%c", c);
  return 0;
}
  `;
  const output = `A`;

  return (
    <div>
      <h2>char in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Char;
