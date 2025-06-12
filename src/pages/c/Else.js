import React from 'react';

const Else = () => {
  const code = `
#include <stdio.h>
int main() {
  int x = 5;
  if (x > 10)
    printf("Greater");
  else
    printf("Smaller");
  return 0;
}
  `;
  const output = `Smaller`;

  return (
    <div>
      <h2>else in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Else;
