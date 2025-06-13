import React from 'react';

const ASCII = () => {
  // Control character names (0–31 and 127)
  const controlChars = [
    'NUL (null)', 'SOH (start of heading)', 'STX (start of text)', 'ETX (end of text)',
    'EOT (end of transmission)', 'ENQ (enquiry)', 'ACK (acknowledge)', 'BEL (bell)',
    'BS (backspace)', 'TAB (horizontal tab)', 'LF (line feed)', 'VT (vertical tab)',
    'FF (form feed)', 'CR (carriage return)', 'SO (shift out)', 'SI (shift in)',
    'DLE (data link escape)', 'DC1 (device control 1)', 'DC2 (device control 2)',
    'DC3 (device control 3)', 'DC4 (device control 4)', 'NAK (negative acknowledge)',
    'SYN (synchronous idle)', 'ETB (end of trans. block)', 'CAN (cancel)',
    'EM (end of medium)', 'SUB (substitute)', 'ESC (escape)', 'FS (file separator)',
    'GS (group separator)', 'RS (record separator)', 'US (unit separator)'
  ];

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#ffffff',
      fontFamily: 'monospace',
      lineHeight: '1.7',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '28px',
        color: '#003366',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '30px'
      }}>
        ASCII Table (0–127)
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '25px' }}>
        ASCII (American Standard Code for Information Interchange) is a character encoding standard 
        that maps characters and symbols to numeric values ranging from 0 to 127. The table below 
        displays each ASCII value with its character and description.
      </p>

      {/* ASCII Table */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '40px',
        fontSize: '14px'
      }}>
        <thead style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Decimal</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Character</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 128 }, (_, i) => {
            const char = (i < 32 || i === 127)
              ? ''
              : String.fromCharCode(i) === ' ' ? '[space]' : String.fromCharCode(i);

            const desc = i < 32
              ? controlChars[i]
              : i === 127
              ? 'DEL (delete)'
              : i === 32
              ? 'Space'
              : 'Printable Character';

            return (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{i.toString().padStart(3, '0')}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{char}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Sample Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>
        Sample C Code Using ASCII
      </h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>
{`#include <stdio.h>

int main() {
    char ch = 'A';
    printf("Character: %c\\n", ch);
    printf("ASCII Value: %d\\n", ch);
    return 0;
}`}
        </code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>
        Output
      </h3>
      <pre style={{
        backgroundColor: '#e8f5e9',
        padding: '10px',
        borderRadius: '6px'
      }}>
        <code>
{`Character: A
ASCII Value: 65`}
        </code>
      </pre>
    </div>
  );
};

export default ASCII;
