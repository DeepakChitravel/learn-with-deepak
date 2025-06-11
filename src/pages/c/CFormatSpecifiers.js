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
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>C Format Specifiers</h2>
      <p>
        Format specifiers are used with <code>printf()</code>, <code>scanf()</code>, and similar functions to
        format the output or input according to the data type.
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
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
