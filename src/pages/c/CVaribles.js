// src/pages/c/CVariables.js

import React from 'react';

const CVariables = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '30px'
      }}>
        Variables in C
      </h2>

      {/* 1. Introduction */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e' }}>1. What is a Variable?</h3>
        <p>
          A variable in C is a name given to a memory location that stores a value.
          It acts as a container for data that can be changed during program execution.
        </p>
      </section>

      {/* 2. Variable Naming Rules */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e' }}>2. Rules for Naming Variables</h3>
        <ul>
          <li>Must start with a letter (A–Z, a–z) or an underscore (_)</li>
          <li>Can include letters, digits (0–9), and underscores</li>
          <li>No special characters like %, $, #, etc.</li>
          <li>Cannot be a reserved keyword (e.g., <code>int</code>, <code>return</code>)</li>
          <li>Case-sensitive (<code>age</code> and <code>Age</code> are different)</li>
        </ul>
      </section>

      {/* 3. Components of a Variable */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e' }}>3. Components of a Variable</h3>
        <ul>
          <li><strong>Data Type</strong> – The type of data (e.g., <code>int</code>, <code>float</code>, <code>char</code>)</li>
          <li><strong>Variable Name</strong> – A user-defined identifier</li>
          <li><strong>Value</strong> – The data stored in the variable</li>
        </ul>
        <p><strong>Example:</strong> <code>int age = 25;</code></p>
      </section>

      {/* 4. Variable Declaration */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e' }}>4. Variable Declaration</h3>
        <p>Variables must be declared before use using this syntax:</p>
        <pre style={styles.code}>
{`data_type variable_name;`}
        </pre>
        <p><strong>Examples:</strong></p>
        <pre style={styles.code}>
{`int age;
float price;
char grade;`}
        </pre>
        <p>You can also initialize a variable at the time of declaration:</p>
        <pre style={styles.code}>
{`int age = 25;
float price = 99.99;
char grade = 'A';`}
        </pre>
        <p>Multiple variables of the same type can be declared together:</p>
        <pre style={styles.code}>
{`int x = 5, y = 10, z = 15;`}
        </pre>
      </section>

      {/* 5. Types of Variables */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e' }}>5. Types of Variables in C</h3>
        <ul>
          <li><strong>Local Variable</strong> – Declared inside a function or block</li>
          <li><strong>Global Variable</strong> – Declared outside all functions</li>
          <li><strong>Static Variable</strong> – Retains value between function calls</li>
          <li><strong>Automatic Variable</strong> – Default for local variables</li>
          <li><strong>External Variable</strong> – Declared with <code>extern</code>, defined elsewhere</li>
        </ul>
      </section>

      {/* 6. Common Data Types */}
      <section>
        <h3 style={{ color: '#1a237e' }}>6. Common Data Types in C</h3>
        <ul>
          <li><code>int</code> – Stores integers (e.g., 10, -5)</li>
          <li><code>float</code> – Stores decimal numbers (e.g., 3.14)</li>
          <li><code>double</code> – Stores large or precise decimal numbers</li>
          <li><code>char</code> – Stores a single character (e.g., 'A')</li>
        </ul>
        <p>Modifiers like <code>signed</code>, <code>unsigned</code>, <code>long</code>, and <code>short</code> can be applied.</p>
      </section>
    </div>
  );
};

const styles = {
  code: {
    backgroundColor: '#f4f4f4',
    color: '#000',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '14px',
    marginTop: '10px',
    overflowX: 'auto',
  },
};

export default CVariables;
