import React from 'react';

const SwitchC = () => {
  const code = `
#include <stdio.h>

int main() {
    int day;
    printf("Enter a number (1-3): ");
    scanf("%d", &day);

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        default:
            printf("Invalid day\\n");
    }

    return 0;
}
  `.trim();

  const output = `
Enter a number (1-3): 2
Tuesday
  `.trim();

  const points = [
    { type: 'Purpose', detail: 'Used to choose one option from many based on a variable’s value.' },
    { type: 'Syntax', detail: 'The switch keyword checks each case until it finds a match.' },
    { type: 'Break', detail: 'break exits the switch block after a match is found.' },
    { type: 'Default', detail: 'default runs if no case matches the expression.' },
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
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Switch Statement in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>switch</code> statement allows multi-way branching based on the value of a variable. It's useful when you have multiple conditions to check.
      </p>

      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

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

export default SwitchC;
