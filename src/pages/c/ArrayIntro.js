import React from 'react';

const ArrayIntro = () => {
  const points = [
    {
      type: 'What is an Array?',
      detail: 'An array is a collection of elements of the same data type stored in contiguous memory locations.'
    },
    {
      type: 'Why use Arrays?',
      detail: 'To store multiple values under one variable name and efficiently access them using indices.'
    },
    {
      type: 'Indexing',
      detail: 'Array indexing starts at 0. The first element is accessed with index 0, the second with index 1, and so on.'
    }
  ];

  const arrayTypes = [
    { name: '1. One-Dimensional Array', desc: 'Used to store a list of elements in a single row or column.' },
    { name: '2. Two-Dimensional Array', desc: 'Used to store elements in a table-like structure (rows and columns).' },
    { name: '3. Multi-Dimensional Array', desc: 'Used for data structures like matrices or tensors with more than 2 dimensions.' }
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
        📦 Arrays in C – Introduction & Types
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Arrays in C allow you to store multiple values of the same type using a single variable name. Here’s what you need to know:
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Types of Arrays */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>📚 Types of Arrays in C</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
        {arrayTypes.map((type, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{type.name}</strong>: {type.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayIntro;
