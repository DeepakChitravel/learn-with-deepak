import React from 'react';

const CFeatures = () => {
  return (
    <div style={{
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.8'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '25px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Features of C Language
      </h2>

      <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
        <li><strong>Simple and Easy to Learn:</strong> C has a small set of keywords and a simple syntax.</li>
        <li><strong>Structured Language:</strong> C uses functions and blocks to divide code, making it modular.</li>
        <li><strong>Portable:</strong> C programs can be compiled and run on different machines with minimal changes.</li>
        <li><strong>Fast and Efficient:</strong> Provides low-level memory access and optimized performance.</li>
        <li><strong>Rich Library:</strong> Comes with many built-in functions and header files.</li>
        <li><strong>Middle-Level Language:</strong> Combines features of high-level and low-level languages.</li>
        <li><strong>Memory Management:</strong> Offers direct memory access via pointers and dynamic allocation.</li>
        <li><strong>Extensible:</strong> Allows creation of user-defined functions to enhance functionality.</li>
        <li><strong>Recursion:</strong> Supports functions that call themselves to solve problems efficiently.</li>
        <li><strong>Compiler-Based:</strong> Being compiled makes C faster than interpreted languages.</li>
        <li><strong>Widely Used:</strong> Acts as a foundation for many modern languages like C++, Java, and Python.</li>
      </ul>
    </div>
  );
};

export default CFeatures;
