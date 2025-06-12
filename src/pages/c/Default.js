import React from 'react';

const Default = () => {
  const code = `
#include <stdio.h>
int main() {
  int num = 3;
  switch (num) {
    case 1: printf("One"); break;
    case 2: printf("Two"); break;
    default: printf("Other");
  }
  return 0;
}
  `;
  const output = `Other`;

  return (
    <div>
      <h2>default in C (used in switch)</h2>
      <pre>{code}</pre>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Default;
