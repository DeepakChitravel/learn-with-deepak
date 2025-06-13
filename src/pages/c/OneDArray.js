import React from 'react';

const OneDArray = () => {
  const code = `
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("One-Dimensional Array Elements:\\n");
    for(int i = 0; i < 5; i++) {
        printf("Element at index %d: %d\\n", i, numbers[i]);
    }

    return 0;
}
  `.trim();

  const output = `
One-Dimensional Array Elements:
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Element at index 3: 40
Element at index 4: 50
  `.trim();

  const points = [
    { type: 'Purpose', detail: 'Stores a list of elements in a single row.' },
    { type: 'Syntax', detail: 'int arr[5] = {10, 20, 30, 40, 50};' },
    { type: 'Access', detail: 'Accessed using arr[index] (e.g., arr[0])' },
  ];

  return (
    <div style={style.container}>
      <h2 style={style.title}>📌 One-Dimensional Array in C</h2>
      <p style={style.paragraph}>
        A one-dimensional array stores a list of elements in a single line.
      </p>
      <ul style={style.list}>
        {points.map((p, i) => (
          <li key={i}><strong>{p.type}:</strong> {p.detail}</li>
        ))}
      </ul>
      <h3 style={style.subtitle}>Code</h3>
      <pre style={style.code}><code>{code}</code></pre>
      <h3 style={style.subtitle}>Output</h3>
      <pre style={style.output}><code>{output}</code></pre>
    </div>
  );
};

const style = {
  container: {
    padding: '30px', background: '#fff', borderRadius: '10px',
    fontFamily: 'monospace', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.7', maxWidth: '800px', margin: 'auto'
  },
  title: {
    textAlign: 'center', fontSize: '26px', marginBottom: '20px',
    color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px'
  },
  paragraph: { fontSize: '16px', marginBottom: '20px' },
  list: { marginBottom: '30px', paddingLeft: '20px' },
  subtitle: { color: '#1a237e', fontSize: '20px', marginBottom: '10px' },
  code: {
    background: '#f4f4f4', padding: '15px', borderRadius: '5px',
    overflowX: 'auto', fontSize: '14px', whiteSpace: 'pre-wrap'
  },
  output: {
    background: '#e8f5e9', padding: '10px', borderRadius: '5px',
    fontSize: '14px'
  }
};

export default OneDArray;
