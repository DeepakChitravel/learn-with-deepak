import React from 'react';

const COperators = () => {
  const operators = [
    { type: 'Arithmetic', examples: '+  -  *  /  %', use: 'Perform basic math operations' },
    { type: 'Relational', examples: '==  !=  >  <  >=  <=', use: 'Compare two values' },
    { type: 'Logical', examples: '&&  ||  !', use: 'Combine or invert conditions' },
    { type: 'Bitwise', examples: '&  |  ^  ~  <<  >>', use: 'Operate on bits' },
    { type: 'Assignment', examples: '=  +=  -=  *=  /=  %=', use: 'Assign or update values' },
    { type: 'Increment/Decrement', examples: '++  --', use: 'Increase or decrease a value' },
    { type: 'Conditional', examples: '?:', use: 'Ternary operator for if-else in one line' },
    { type: 'Sizeof', examples: 'sizeof()', use: 'Returns size of a data type or variable' },
    { type: 'Comma', examples: ',', use: 'Separates expressions, returns last value' },
    { type: 'Pointer', examples: '*  &', use: 'Access memory addresses and values' },
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
        🔢 C Operators and Their Types
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Operators in C are symbols that perform operations on variables and values. Below is a categorized table of all major C operators:
      </p>

      {/* Operator Table */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px',
        marginBottom: '30px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Operator Type</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Examples</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {operators.map((op, idx) => (
            <tr key={idx}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{op.type}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{op.examples}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{op.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Key Points */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>💡 Notes</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}><strong>Operators</strong> work with variables, constants, or values.</li>
        <li style={{ marginBottom: '8px' }}><strong>Precedence</strong> and <strong>associativity</strong> decide the order of execution.</li>
        <li style={{ marginBottom: '8px' }}>The <strong>sizeof</strong> operator is evaluated at compile time.</li>
        <li style={{ marginBottom: '8px' }}>Use parentheses to control evaluation order when mixing different operators.</li>
      </ul>
    </div>
  );
};

export default COperators;
