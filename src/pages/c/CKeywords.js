// src/pages/c/CKeywords.js

import React from 'react';

const CKeywords = () => {
  const keywords = [
    'auto', 'break', 'case', 'char', 'const', 'continue',
    'default', 'do', 'double', 'else', 'enum', 'extern',
    'float', 'for', 'goto', 'if', 'inline', 'int',
    'long', 'register', 'restrict', 'return', 'short',
    'signed', 'sizeof', 'static', 'struct', 'switch',
    'typedef', 'union', 'unsigned', 'void', 'volatile', 'while',
    '_Alignas', '_Alignof', '_Atomic', '_Bool', '_Complex',
    '_Generic', '_Imaginary', '_Noreturn', '_Static_assert', '_Thread_local'
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Keywords in C Language
      </h2>

      {/* Explanation */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        C has a set of <strong>reserved words</strong> called <strong>keywords</strong>, each with a predefined meaning in the compiler. These words cannot be used as variable or function names. They form the basic building blocks of C programming.
      </p>

      {/* Keyword Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '10px'
      }}>
        {keywords.map((word, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CKeywords;
