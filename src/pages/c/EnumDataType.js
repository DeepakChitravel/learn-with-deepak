import React from 'react';

const EnumDatatype = () => {
  const code = `
#include <stdio.h>

enum Weekday {
    Sunday,     // 0
    Monday,     // 1
    Tuesday,    // 2
    Wednesday,  // 3
    Thursday,   // 4
    Friday,     // 5
    Saturday    // 6
};

int main() {
    enum Weekday today;

    today = Wednesday;

    printf("Day index of Wednesday is: %d\\n", today);

    // Loop through all days
    printf("All weekdays:\\n");
    for (int i = Sunday; i <= Saturday; i++) {
        printf("%d ", i);
    }

    return 0;
}
  `.trim();

  const output = `
Day index of Wednesday is: 3
All weekdays:
0 1 2 3 4 5 6
  `.trim();

  const points = [
    { type: 'What is enum?', detail: 'An enum is a user-defined data type consisting of named integer constants.' },
    { type: 'Usage', detail: 'Used to improve code readability by replacing numeric constants with names.' },
    { type: 'Default Values', detail: 'By default, values start from 0 and increase by 1.' },
    { type: 'Example', detail: 'enum Weekday { Sunday, Monday, ..., Saturday };' },
    { type: 'Access', detail: 'You can assign and compare enum variables just like integers.' },
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
        🧾 Enumeration (enum) in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        <code>enum</code> is a user-defined type in C used to assign names to integral constants to make code more readable and manageable.
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Sample Code</h3>
      <pre style={{
        background: '#1e1e1e',
        color: '#f8f8f2',
        padding: '15px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontSize: '14px',
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px',
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default EnumDatatype;
