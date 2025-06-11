// CIdentifiers.js

import React from 'react';

const CIdentifiers = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Understanding C Identifiers and Literals</h1>

      {/* Introduction to C Identifiers */}
      <section>
        <h2>1️⃣ Introduction to C Identifiers</h2>
        <p>
          In C, an identifier is the name used to refer to variables, functions, arrays, or any other user-defined entity. 
          It must be unique and meaningful to ensure code readability and maintainability.
        </p>
      </section>

      {/* Rules for Constructing Identifiers */}
      <section>
        <h2>2️⃣ Rules for Constructing C Identifiers</h2>
        <ul>
          <li>Must start with a letter (A-Z or a-z) or an underscore (_) </li>
          <li>Can contain letters, digits, and underscores</li>
          <li>Cannot be a reserved keyword (e.g., <code>int</code>, <code>return</code>)</li>
          <li>Case-sensitive (e.g., <code>sum</code> and <code>Sum</code> are different)</li>
          <li>Should be meaningful and reflect its purpose in the code</li>
        </ul>
      </section>

      {/* Types of Identifiers */}
      <section>
        <h2>3️⃣ Types of Identifiers</h2>
        <p>C identifiers are classified into the following types:</p>
        <ul>
          <li><strong>Variable Identifiers</strong> - Used to define variables (e.g., <code>int age;</code>)</li>
          <li><strong>Function Identifiers</strong> - Used to name functions (e.g., <code>void calculateSum()</code>)</li>
          <li><strong>Array Identifiers</strong> - Used to declare arrays (e.g., <code>int numbers[5];</code>)</li>
          <li><strong>Structure Identifiers</strong> - Used to define struct names (e.g., <code>struct Student</code>)</li>
        </ul>
      </section>

      {/* C Literals */}
      <section>
        <h2>4️⃣ C Literals</h2>
        <p>
          A **literal** is a fixed value assigned directly in the code. Types of literals in C include:
        </p>
        <ul>
          <li><strong>Integer Literals</strong> - e.g., <code>10</code>, <code>-45</code></li>
          <li><strong>Floating-point Literals</strong> - e.g., <code>3.14</code>, <code>0.001</code></li>
          <li><strong>Character Literals</strong> - e.g., <code>'A'</code>, <code>'z'</code></li>
          <li><strong>String Literals</strong> - e.g., <code>"Hello"</code>, <code>"C Programming"</code></li>
          <li><strong>Boolean Literals</strong> - Typically represented as <code>true</code> and <code>false</code></li>
        </ul>
      </section>
    </div>
  );
};

export default CIdentifiers;
