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
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Keywords in C Language</h2>

      <p>
        C language has a set of <strong>reserved words</strong> known as keywords. These cannot be used as variable
        names because they serve special purposes in the language syntax.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '10px', 
        marginTop: '20px' 
      }}>
        {keywords.map((word, idx) => (
          <div 
            key={idx} 
            style={{ 
              backgroundColor: '#f0f0f0', 
              padding: '10px', 
              borderRadius: '6px', 
              textAlign: 'center',
              fontFamily: 'monospace',
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
