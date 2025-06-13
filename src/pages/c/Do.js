import React from 'react';

const Do = () => {
  const code = `
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d\\n", i);
        i++;
    } while (i <= 3);
    return 0;
}
  `.trim();

  const output = `
1
2
3
  `.trim();

  const points = [
    { type: 'What is do...while?', detail: 'A looping statement that executes the body at least once before checking the condition.' },
    { type: 'Post-Test Loop', detail: 'The condition is evaluated after executing the block.' },
    { type: 'Syntax', detail: 'Starts with `do` followed by a block, then `while(condition);`.' },
    { type: 'Use Case', detail: 'Useful when the loop body must run at least once regardless of the condition.' },
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
        do...while Loop in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>do...while</code> loop ensures the code block runs at least once before checking the condition.
        It's especially helpful when an operation must occur at least once regardless of the condition.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
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

      {/* Output Block */}
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

export default Do;
