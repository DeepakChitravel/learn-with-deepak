import React from 'react';

const PointerIntro = () => {
  const points = [
    { type: 'What is a Pointer?', detail: 'A pointer is a variable that stores the memory address of another variable.' },
    { type: 'Declaration Syntax', detail: 'int *p; // declares a pointer to an integer' },
    { type: 'Accessing Values', detail: 'Use * (dereference operator) to access the value at the memory address.' },
    { type: 'Why Use Pointers?', detail: 'Pointers allow efficient array handling, dynamic memory allocation, and function argument manipulation.' }
  ];

 const types = [
  { type: '1. Null Pointer', detail: 'A pointer that is initialized with NULL and does not point to any valid memory location.' },
  { type: '2. Void Pointer', detail: 'A pointer that can store the address of any data type but must be cast before dereferencing.' },
  { type: '3. Wild Pointer', detail: 'A pointer declared but not initialized; it points to a random memory location and can cause bugs.' },
  { type: '4. Dangling Pointer', detail: 'A pointer that points to memory which has already been freed or deleted.' },
  { type: '5. Function Pointer', detail: 'A pointer that stores the address of a function and can be used to call the function.' },
  { type: '6. Array Pointer', detail: 'A pointer that points to the first element of an array.' },
  { type: '7. Pointer to Pointer', detail: 'A pointer that stores the address of another pointer.' },
  { type: '8. Constant Pointer', detail: 'A pointer that cannot point to another address once initialized.' },
  { type: '9. Pointer to Constant', detail: 'A pointer that cannot modify the value it is pointing to.' }
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
        📌 Introduction to Pointers in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Pointers are one of the most powerful features in C. They allow direct access and manipulation of memory, making C a low-level language.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🔍 Key Concepts</h3>
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧷 Types of Pointers</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
        {types.map((type, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{type.type}:</strong> {type.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointerIntro;
