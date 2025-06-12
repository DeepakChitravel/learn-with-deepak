// src/pages/c/CFormatSpecifiers.js

import React from 'react';

const CFormatSpecifiers = () => {
  const specifiers = [
    { specifier: '%d', description: 'Signed decimal integer' },
    { specifier: '%i', description: 'Signed decimal integer (same as %d)' },
    { specifier: '%u', description: 'Unsigned decimal integer' },
    { specifier: '%f', description: 'Decimal floating point' },
    { specifier: '%F', description: 'Decimal floating point (uppercase)' },
    { specifier: '%e', description: 'Scientific notation (lowercase)' },
    { specifier: '%E', description: 'Scientific notation (uppercase)' },
    { specifier: '%g', description: 'Uses %e or %f, whichever is shorter' },
    { specifier: '%G', description: 'Uses %E or %F, whichever is shorter' },
    { specifier: '%x', description: 'Unsigned hexadecimal integer (lowercase)' },
    { specifier: '%X', description: 'Unsigned hexadecimal integer (uppercase)' },
    { specifier: '%o', description: 'Unsigned octal integer' },
    { specifier: '%c', description: 'Character' },
    { specifier: '%s', description: 'String of characters' },
    { specifier: '%p', description: 'Pointer address' },
    { specifier: '%ld', description: 'Signed long integer' },
    { specifier: '%lu', description: 'Unsigned long integer' },
    { specifier: '%lld', description: 'Signed long long integer' },
    { specifier: '%llu', description: 'Unsigned long long integer' },
    { specifier: '%Lf', description: 'Long double' },
    { specifier: '%%', description: 'Prints a percent sign' },
    { specifier: '%n', description: 'Stores the number of characters written so far into an int* argument' },
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
        Format Specifiers in C
      </h2>

      {/* Introductory Paragraph */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Format specifiers are placeholders used in functions like <code>printf()</code> and <code>scanf()</code> 
        to define the type of data being printed or read. They ensure correct formatting and interpretation of variables.
      </p>

      {/* Specifier Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Specifier</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {specifiers.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ccc', fontFamily: 'monospace' }}>{item.specifier}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CFormatSpecifiers;
