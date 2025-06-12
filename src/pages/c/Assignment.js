import React from 'react';

const Assignment = () => {
  const code = `
#include <stdio.h>
int main() {
  int a = 5;
  a += 3;
  printf("%d", a);
  return 0;
}
`.trim();

  const output = `8`;

  const infoPoints = [
    "Assignment operators are used to assign values to variables.",
    "The basic assignment operator is `=` which assigns the value on the right to the variable on the left.",
    "`+=`, `-=`, `*=`, `/=`, and `%=` are compound assignment operators that combine arithmetic with assignment.",
    "`a += 3` is equivalent to `a = a + 3`.",
    "They improve code readability and reduce repetition."
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Assignment Operators in C
      </h2>

      {/* Intro Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {infoPoints.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Sample Code</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        backgroundColor: '#e8f5e9',
        padding: '10px',
        borderRadius: '6px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default Assignment;
