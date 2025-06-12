import React from 'react';

const Do = () => {
  const code = `
#include <stdio.h>
int main() {
  int i = 1;
  do {
    printf("%d\\n", i);
    i++;
  } while (i <= 3);
  return 0;
}
  `;
  const output = `1\n2\n3`;

  return (
    <div>
      <h2>do...while in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Do;
