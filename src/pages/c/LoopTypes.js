import React from 'react';

const LoopTypes = () => {
  const loops = [
    {
      title: '1️⃣ For Loop',
      description: 'The `for` loop is used when the number of iterations is known.',
      code: `
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("Iteration %d\\n", i);
    }
    return 0;
}
      `.trim(),
      output: `
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
      `.trim()
    },
    {
      title: '2️⃣ While Loop',
      description: 'The `while` loop is used when the number of iterations is not known in advance.',
      code: `
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("Count %d\\n", i);
        i++;
    }
    return 0;
}
      `.trim(),
      output: `
Count 1
Count 2
Count 3
Count 4
Count 5
      `.trim()
    },
    {
      title: '3️⃣ Do-While Loop',
      description: 'The `do-while` loop runs the code block at least once before checking the condition.',
      code: `
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("Step %d\\n", i);
        i++;
    } while (i <= 5);
    return 0;
}
      `.trim(),
      output: `
Step 1
Step 2
Step 3
Step 4
Step 5
      `.trim()
    }
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
        🔁 Types of Loops in C
      </h2>

      {loops.map((loop, idx) => (
        <div key={idx} style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>{loop.title}</h3>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>{loop.description}</p>

          <pre style={{
            background: '#f4f4f4',
            padding: '15px',
            borderRadius: '5px',
            overflowX: 'auto',
            fontSize: '14px',
            whiteSpace: 'pre-wrap'
          }}>
            <code>{loop.code}</code>
          </pre>

          <h4 style={{ color: '#1a237e', marginTop: '15px' }}>Output</h4>
          <pre style={{
            background: '#e8f5e9',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '14px'
          }}>
            <code>{loop.output}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default LoopTypes;
