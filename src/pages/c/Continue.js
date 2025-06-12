import React from 'react';

const Continue = () => {
  const code = `
#include <stdio.h>
int main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3)
      continue;
    printf("%d\\n", i);
  }
  return 0;
}
  `;
  const output = `1\n2\n4\n5`;

  return (
    <div>
      <h2>continue in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Continue;
