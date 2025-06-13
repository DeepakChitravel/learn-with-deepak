import React from 'react';

const PointerDemo = () => {
  const code = `
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr;

    ptr = &num;  // ptr stores the address of num

    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", &num);
    printf("Value of ptr (address): %p\\n", ptr);
    printf("Value pointed by ptr: %d\\n", *ptr);

    return 0;
}
  `.trim();

  const output = `
Value of num: 10
Address of num: 0x7ffee994ca3c
Value of ptr (address): 0x7ffee994ca3c
Value pointed by ptr: 10
  `.trim();

  const points = [
    { type: 'Pointer Basics', detail: 'A pointer stores the memory address of another variable.' },
    { type: 'Declaration', detail: 'int *ptr declares a pointer to an integer.' },
    { type: 'Address Operator (&)', detail: 'Used to get the address of a variable.' },
    { type: 'Dereferencing (*)', detail: 'Used to access the value at the address stored in the pointer.' }
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
        🔗 Pointer Example in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This program demonstrates the basic use of pointers in C to access and manipulate memory addresses.
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>💻 C Code</h3>
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
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
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

export default PointerDemo;
