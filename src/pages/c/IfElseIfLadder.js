import React from 'react';

const IfElseIfLadder = () => {
  const code = `
#include <stdio.h>

int main() {
    int marks;

    printf("Enter your marks: ");
    scanf("%d", &marks);

    if (marks >= 90)
        printf("Grade: A\\n");
    else if (marks >= 75)
        printf("Grade: B\\n");
    else if (marks >= 60)
        printf("Grade: C\\n");
    else if (marks >= 40)
        printf("Grade: D\\n");
    else
        printf("Grade: F\\n");

    return 0;
}
  `.trim();

  const output = `
Enter your marks: 78
Grade: B
  `.trim();

  const points = [
    { type: 'What is it?', detail: 'An if...else if ladder checks multiple conditions in sequence.' },
    { type: 'Execution', detail: 'Only the first true condition’s block is executed.' },
    { type: 'Structure', detail: 'Starts with if, followed by multiple else if, and ends with else.' },
    { type: 'Use Case', detail: 'Helpful when dealing with multiple branching decisions like grading systems.' },
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
        if...else if Ladder in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This C program demonstrates the use of the <code>if...else if</code> ladder to classify grades based on marks.
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

export default IfElseIfLadder;
