import React from 'react';

const CComments = () => {
  const code = `
#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello, World!\\n");

    /* 
       This is a multi-line comment.
       It can span multiple lines.
    */
    printf("Learning C Comments!\\n");

    return 0;
}
`.trim();

  const output = `
Hello, World!
Learning C Comments!
`.trim();

  const points = [
    { type: 'What Are Comments?', detail: 'Explanatory notes added to the code to increase readability and understanding.' },
    { type: 'Single-line Comment', detail: 'Begins with // and continues to the end of the line.' },
    { type: 'Multi-line Comment', detail: 'Enclosed between /* and */ and can span multiple lines.' },
    { type: 'Documentation Purpose', detail: 'Used to describe what a block or line of code is doing for easier maintenance.' },
    { type: 'Helps Debugging', detail: 'Temporarily disable code by commenting it out during debugging.' },
    { type: 'Compiler Ignorance', detail: 'The compiler completely skips comments during compilation.' },
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
        Comments in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Comments are non-executable statements used to document and explain code logic.
        They are ignored by the compiler and do not affect the execution of the program.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
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

export default CComments;
