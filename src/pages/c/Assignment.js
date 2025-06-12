import React from 'react';

const Assignment = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5;
  a += 3;
  printf("%d", a);
  return 0;
}
  `;
  const output = `8`;

  return (
    <div>
      <h2>Assignment Operators</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Assignment;
    