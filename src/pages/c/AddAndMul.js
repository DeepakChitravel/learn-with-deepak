// AddAndMul.js

import React from 'react';

const AddAndMul = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Understanding Addition and Multiplication in C</h1>

      {/* Display C Code */}
      <section>
        <h2>✅ C Code</h2>
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 5, b = 3;
    int sum = a + b;
    int product = a * b;
    
    printf("Sum: %d\\n", sum);
    printf("Product: %d\\n", product);

    return 0;
}`}
          </code>
        </pre>
      </section>

      {/* Display Output */}
      <section>
        <h2>🔹 Expected Output</h2>
        <pre>
          <code>
{`Sum: 8
Product: 15`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default AddAndMul;
