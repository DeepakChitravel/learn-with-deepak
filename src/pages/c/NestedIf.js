import React from 'react';

const NestedIf = () => {
  const code = `
#include <stdio.h>

int main() {
    int age;
    char gender;

    printf("Enter age: ");
    scanf("%d", &age);

    printf("Enter gender (M/F): ");
    scanf(" %c", &gender);

    if (age >= 18) {
        if (gender == 'M')
            printf("You are an adult male.\\n");
        else if (gender == 'F')
            printf("You are an adult female.\\n");
        else
            printf("Invalid gender entered.\\n");
    } else {
        printf("You are a minor.\\n");
    }

    return 0;
}
  `.trim();

  const output = `
Enter age: 20
Enter gender (M/F): F
You are an adult female.
  `.trim();

  const points = [
    { type: 'What is Nested if?', detail: 'A nested if is an if statement inside another if or else block.' },
    { type: 'Why use it?', detail: 'It helps to check secondary conditions only if the primary condition is true.' },
    { type: 'Example Case', detail: 'Check age first, then gender only if age condition is met.' },
    { type: 'Structure Tip', detail: 'Keep inner conditions indented properly for better readability.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: 'auto'
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
        Nested if Statement in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This C program demonstrates how to use nested <code>if</code> statements to evaluate multiple related conditions.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px',
        whiteSpace: 'pre-wrap'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default NestedIf;
