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
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1 style={{ textAlign: 'center' }}>🔤 ASCII Table (0–127)</h1>

      <p style={{ marginBottom: '20px' }}>
        ASCII (American Standard Code for Information Interchange) assigns numbers (0–127) to characters and control codes. 
        The table below lists all ASCII values with their respective characters and descriptions.
      </p>

      <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
        <thead style={{ background: '#f2f2f2' }}>
          <tr>
            <th>Decimal</th>
            <th>Character</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 128 }, (_, i) => {
            const char =
              i < 32 || i === 127
                ? ''
                : String.fromCharCode(i) === ' '
                ? '[space]'
                : String.fromCharCode(i);

            const desc =
              i < 32
                ? controlChars[i]
                : i === 127
                ? 'DEL (delete)'
                : i === 32
                ? 'Space'
                : 'Printable Character';

            return (
              <tr key={i}>
                <td>{i.toString().padStart(3, '0')}</td>
                <td>{char}</td>
                <td>{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 style={{ marginTop: '40px' }}>💡 Sample C Code using ASCII</h2>
      <pre style={{ backgroundColor: '#eee', padding: '10px', borderRadius: '8px' }}>
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

      <h2>🔹 Output</h2>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '8px' }}>
        <code>
{`Character: A
ASCII Value: 65`}
        </code>
      </pre>
    </div>
  );
};

export default ASCII;
