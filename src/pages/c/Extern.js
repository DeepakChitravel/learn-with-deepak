import React from 'react';

const Extern = () => {
  const code = `
// File1.c
int x = 10;

// File2.c
#include <stdio.h>
extern int x;
int main() {
  printf("%d", x);
  return 0;
}
  `;
  const output = `10`;

  return (
    <div>
      <h2>extern in C</h2>
      <p><b>Note:</b> Requires two files. Extern is used to declare a global variable defined elsewhere.</p>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Extern;
