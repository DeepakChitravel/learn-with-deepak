// src/pages/fundamentals/CFeatures.js
import React from 'react';

const CFeatures = () => {
  const features = [
    { title: 'Simple and Easy to Learn', desc: 'C has a small set of keywords and a straightforward syntax, making it beginner-friendly.' },
    { title: 'Structured Language', desc: 'Supports modular programming using functions and blocks.' },
    { title: 'Portable', desc: 'C programs can run on various hardware with little to no modification.' },
    { title: 'Fast and Efficient', desc: 'Provides low-level memory access and minimal runtime overhead.' },
    { title: 'Rich Library', desc: 'Comes with a wide range of built-in functions and header files.' },
    { title: 'Middle-Level Language', desc: 'Combines the features of both high-level and low-level programming.' },
    { title: 'Memory Management', desc: 'Allows direct memory access and dynamic memory allocation using pointers.' },
    { title: 'Extensible', desc: 'Users can define their own functions to add new capabilities.' },
    { title: 'Recursion', desc: 'Supports recursive function calls, enabling elegant solutions to complex problems.' },
    { title: 'Compiler-Based', desc: 'Being compiled allows C to execute faster than interpreted languages.' },
    { title: 'Widely Used', desc: 'Forms the base for many modern programming languages like C++, Java, and Python.' }
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
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Features of C Language
      </h2>

      <ul style={{ fontSize: '16px', paddingLeft: '20px', marginTop: '10px' }}>
        {features.map((item, index) => (
          <li key={index} style={{ marginBottom: '12px' }}>
            <strong>{item.title}:</strong> {item.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CFeatures;
