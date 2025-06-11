// ASCII.js

import React from 'react';

const ASCII = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Understanding ASCII in C</h1>

      {/* Introduction to ASCII */}
      <section>
        <h2>1️⃣ Introduction to ASCII</h2>
        <p>
          ASCII (American Standard Code for Information Interchange) is a character encoding standard 
          used to represent text in computers, communication devices, and digital systems. 
          It defines **128 unique characters** (0–127), including letters, digits, symbols, and control characters.
        </p>
      </section>

      {/* ASCII Full Character Set */}
      <section>
        <h2>2️⃣ Complete ASCII Character Set (0–127)</h2>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Decimal</th>
              <th>Character</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 128 }, (_, i) => (
              <tr key={i}>
                <td>{i.toString().padStart(3, '0')}</td>
                <td>{String.fromCharCode(i)}</td>
                <td>
                  {i < 32 || i === 127
                    ? 'Control Character'
                    : i === 32
                    ? 'Space'
                    : `Printable Character`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ASCII in C Code */}
      <section>
        <h2>3️⃣ ASCII in C - Example Code</h2>
        <pre>
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
      </section>

      {/* Expected Output */}
      <section>
        <h2>🔹 Expected Output</h2>
        <pre>
          <code>
{`Character: A
ASCII Value: 65`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default ASCII;
