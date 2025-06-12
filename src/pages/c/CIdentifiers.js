// src/pages/fundamentals/CIdentifiers.js

import React from 'react';

const headingStyle = {
  fontSize: '20px',
  color: '#1a237e',
  backgroundColor: '#f0f4ff',
  borderLeft: '5px solid #3f51b5',
  padding: '10px 15px',
  borderRadius: '5px',
  marginBottom: '15px'
};

const CIdentifiers = () => {
  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '30px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Understanding C Identifiers and Literals
      </h2>

      {/* Introduction */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={headingStyle}>Introduction to C Identifiers</h3>
        <p>
          In C, an <strong>identifier</strong> is the name used to refer to variables, functions, arrays, or any other user-defined entity. 
          It must be unique and meaningful to ensure code readability and maintainability.
        </p>
      </section>

      {/* Rules */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={headingStyle}>Rules for Constructing C Identifiers</h3>
        <ul>
          <li>Must start with a letter (A-Z or a-z) or an underscore (_)</li>
          <li>Can contain letters, digits, and underscores</li>
          <li>Cannot be a reserved keyword (e.g., <code>int</code>, <code>return</code>)</li>
          <li>Case-sensitive (e.g., <code>sum</code> and <code>Sum</code> are different)</li>
          <li>Should be meaningful and reflect its purpose in the code</li>
        </ul>
      </section>

      {/* Types */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={headingStyle}>Types of Identifiers</h3>
        <p>Identifiers in C are categorized as follows:</p>
        <ul>
          <li><strong>Variable Identifiers</strong> – e.g., <code>int age;</code></li>
          <li><strong>Function Identifiers</strong> – e.g., <code>void calculateSum()</code></li>
          <li><strong>Array Identifiers</strong> – e.g., <code>int numbers[5];</code></li>
          <li><strong>Structure Identifiers</strong> – e.g., <code>struct Student</code></li>
        </ul>
      </section>

      {/* Literals */}
      <section>
        <h3 style={headingStyle}>C Literals</h3>
        <p>
          A <strong>literal</strong> is a fixed value assigned directly in the code. Types of literals in C include:
        </p>
        <ul>
          <li><strong>Integer Literals</strong> – e.g., <code>10</code>, <code>-45</code></li>
          <li><strong>Floating-point Literals</strong> – e.g., <code>3.14</code>, <code>0.001</code></li>
          <li><strong>Character Literals</strong> – e.g., <code>'A'</code>, <code>'z'</code></li>
          <li><strong>String Literals</strong> – e.g., <code>"Hello"</code>, <code>"C Programming"</code></li>
          <li><strong>Boolean Literals</strong> – e.g., <code>true</code>, <code>false</code></li>
        </ul>
      </section>
    </div>
  );
};

export default CIdentifiers;
