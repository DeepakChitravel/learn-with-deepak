// SubAndDiv.js

import React from 'react';

const SubAndDiv = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Understanding Subtraction and Division in C</h1>

      {/* Display C Code */}
      <section>
        <h2>✅ C Code</h2>
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 10, b = 2;
    int difference = a - b;
    float quotient = (float)a / b;
    
    printf("Difference: %d\\n", difference);
    printf("Quotient: %.2f\\n", quotient);

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
{`Difference: 8
Quotient: 5.00`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default SubAndDiv;
