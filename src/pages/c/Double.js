import React from 'react';

const Double = () => {
  const code = `
#include <stdio.h>
int main() {
  double pi = 3.14159;
  printf("%lf", pi);
  return 0;
}
  `;
  const output = `3.141590`;

  return (
    <div>
      <h2>double in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Double;
