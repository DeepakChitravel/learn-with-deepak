import React from 'react';

const AddAndMul = () => {
  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Addition and Multiplication in C
      </h2>

      {/* Introduction */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        In C programming, arithmetic operations such as addition (<code>+</code>) and multiplication (<code>*</code>) 
        are fundamental for performing calculations. These operators are used with numeric variables to perform basic math.
      </p>

      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li><strong>Addition Operator (+):</strong> Adds two operands.</li>
        <li><strong>Multiplication Operator (*):</strong> Multiplies two operands.</li>
        <li><strong>Used with Integers or Floats:</strong> Can be used for both data types.</li>
        <li><strong>Stored in Variables:</strong> The result of operations is typically stored in another variable.</li>
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>C Code Example</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
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

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Expected Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <code>
{`Sum: 8
Product: 15`}
        </code>
      </pre>
    </div>
  );
};

export default AddAndMul;
