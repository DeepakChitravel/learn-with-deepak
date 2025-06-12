import React from 'react';

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
  `.trim();

  const output = `
Sum = 15
Sub = 5
Mul = 50
Div = 2
Mod = 0
  `.trim();

  const points = [
    { type: 'Addition (+)', detail: 'Adds two operands and returns the result.' },
    { type: 'Subtraction (-)', detail: 'Subtracts the second operand from the first.' },
    { type: 'Multiplication (*)', detail: 'Multiplies two operands.' },
    { type: 'Division (/)', detail: 'Divides the numerator by the denominator.' },
    { type: 'Modulus (%)', detail: 'Returns the remainder of a division.' },
  ];

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
        ➕ Arithmetic Operators in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Arithmetic operators are used to perform common mathematical operations like addition, subtraction,
        multiplication, division, and modulus on variables in C.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Example */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default Arithmetic;
