import React from 'react';
import CContentTemplate from '../../components/CContentTemplate';

const Arithmetic = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 10, b = 5;
  printf("Sum = %d\\n", a + b);
  printf("Sub = %d\\n", a - b);
  printf("Mul = %d\\n", a * b);
  printf("Div = %d\\n", a / b);
  printf("Mod = %d", a % b);
  return 0;
}
  `;

  const output = `Sum = 15\nSub = 5\nMul = 50\nDiv = 2\nMod = 0`;

  return (
    <CContentTemplate
      title="Arithmetic Operators in C"
      code={code}
      output={output}
    />
  );
};

export default Arithmetic;
