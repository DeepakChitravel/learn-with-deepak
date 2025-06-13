// src/pages/fundamentals/CBasics.js

import React from 'react';

const sectionHeading = {
  fontSize: '20px',
  color: '#1a237e',
  backgroundColor: '#f0f4ff',
  borderLeft: '5px solid #3f51b5',
  padding: '10px 15px',
  borderRadius: '5px',
  marginBottom: '15px'
};

const CBasics = () => {
  return (
    <div style={{
      background: '#fff',
      padding: '30px',
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
        Basics of C Programming
      </h2>

      {/* Constants */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={sectionHeading}>Constants in C</h3>
        <p>
          Constants are fixed values that do not change during the execution of a program. They are also called literals.
        </p>
        <h4>Types of Constants:</h4>
        <ul>
          <li><strong>Integer Constants</strong> – e.g., 10, -25</li>
          <li><strong>Floating-point Constants</strong> – e.g., 3.14, -0.0001</li>
          <li><strong>Character Constants</strong> – e.g., 'a', 'Z'</li>
          <li><strong>String Constants</strong> – e.g., "Hello", "123"</li>
          <li><strong>Enumeration Constants</strong> – e.g., <code>enum day  Mon, Tue </code></li>
        </ul>
      </section>

      {/* Static Keyword */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={sectionHeading}>Static Keyword in C</h3>
        <p>
          The <code>static</code> keyword preserves the value of a variable between function calls.
        </p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
          <code>
{`void counter() {
  static int count = 0;
  count++;
  printf("%d\\n", count);
}`}
          </code>
        </pre>
        <p>Output (after 3 calls): <code>1 2 3</code></p>
      </section>

      {/* Programming Errors */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={sectionHeading}>Programming Errors in C</h3>
        <ul>
          <li><strong>Syntax Error</strong> – Violates grammar of C (e.g., missing semicolon)</li>
          <li><strong>Logical Error</strong> – Code runs but gives wrong result</li>
          <li><strong>Runtime Error</strong> – Errors during program execution (e.g., divide by zero)</li>
          <li><strong>Semantic Error</strong> – Invalid logic meaning (e.g., using wrong operator)</li>
        </ul>
      </section>

      {/* Tokens */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={sectionHeading}>Tokens in C Language</h3>
        <p>Tokens are the smallest individual units in a C program.</p>
        <ul>
          <li><strong>Keywords</strong> – e.g., int, return, void</li>
          <li><strong>Identifiers</strong> – e.g., main, total, sum</li>
          <li><strong>Constants</strong> – e.g., 10, 'A'</li>
          <li><strong>Operators</strong> – e.g., +, -, *, /</li>
          <li><strong>Special Symbols</strong> – e.g., (), {}, [], ;, #</li>
        </ul>
      </section>

      {/* Special Symbols */}
      <section>
        <h3 style={sectionHeading}>Special Symbols in C</h3>
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Symbol</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>( )</td><td>Parentheses – function calls, grouping</td></tr>
            <tr><td>{`{ }`}</td><td>Braces – define block of code</td></tr>
            <tr><td>[ ]</td><td>Brackets – array subscripting</td></tr>
            <tr><td>;</td><td>Semicolon – statement terminator</td></tr>
            <tr><td>,</td><td>Comma – separator</td></tr>
            <tr><td>#</td><td>Hash – preprocessor directive</td></tr>
            <tr><td>*</td><td>Asterisk – pointer or multiplication</td></tr>
            <tr><td>&amp;</td><td>Ampersand – address operator</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CBasics;
