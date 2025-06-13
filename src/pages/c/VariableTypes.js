// VariableTypes.js

import React from 'react';

const VariableTypes = () => {
  const code = `
#include <stdio.h>

// Global variable
int globalVar = 100;

// Extern variable
extern int externVar;

void localExample() {
    int localVar = 10;  // Local variable
    printf("Local: %d\\n", localVar);
}

void staticExample() {
    static int staticVar = 0;  // Static variable
    staticVar++;
    printf("Static: %d\\n", staticVar);
}

void registerExample() {
    register int regVar = 5;  // Register variable
    printf("Register: %d\\n", regVar);
}

int main() {
    int autoVar = 20;  // Automatic variable

    printf("Global: %d\\n", globalVar);
    printf("Automatic: %d\\n", autoVar);

    localExample();
    staticExample();
    staticExample();
    registerExample();

    return 0;
}

// In another file: int externVar = 500;
  `.trim();

  const output = `
Global: 100
Automatic: 20
Local: 10
Static: 1
Static: 2
Register: 5
  `.trim();

  const types = [
    { type: 'Local Variable', detail: 'Declared inside a function or block, accessible only within it.' },
    { type: 'Global Variable', detail: 'Declared outside all functions, accessible throughout the program.' },
    { type: 'Static Variable', detail: 'Retains its value between function calls.' },
    { type: 'Extern Variable', detail: 'Declared using extern keyword to access a global variable from another file.' },
    { type: 'Automatic Variable', detail: 'Default storage class for local variables inside a function.' },
    { type: 'Register Variable', detail: 'Stored in CPU register for faster access (compiler may ignore).' },
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
        📘 Types of Variables in C
      </h2>

      {/* Intro */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Variables in C are named memory locations that store data. Their behavior depends on their scope, lifetime, and storage class.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {types.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.type}:</strong> {item.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧪 Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
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

export default VariableTypes;
