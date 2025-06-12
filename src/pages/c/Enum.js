import React from 'react';

const Enum = () => {
  const code = `
#include <stdio.h>
enum days {SUN, MON, TUE};
int main() {
  enum days d = MON;
  printf("%d", d);
  return 0;
}
  `;
  const output = `1`;

  return (
    <div>
      <h2>enum in C</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Enum;
