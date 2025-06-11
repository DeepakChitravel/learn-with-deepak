import React from 'react';

const CVariables = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Variables in C</h2>

      {/* What is a Variable */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 What is a Variable?</h4>
        <p>
          A variable in C is a name given to a memory location that stores a value.
          It acts as a container for data that can be changed during program execution.
        </p>
      </section>

      {/* Rules for Defining Variables */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Rules for Defining Variables</h4>
        <ul>
          <li>Must begin with a letter (A–Z, a–z) or underscore (_)</li>
          <li>Can contain letters, digits (0–9), and underscore</li>
          <li>No special characters like %, $, #, etc.</li>
          <li>Cannot be a keyword (e.g., <code>int</code>, <code>return</code>)</li>
          <li>Case-sensitive (<code>age</code> and <code>Age</code> are different)</li>
        </ul>
      </section>

      {/* Three Components of a Variable */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Components of a Variable</h4>
        <ul>
          <li><strong>Type</strong> – Defines the type of data (e.g., <code>int</code>, <code>float</code>)</li>
          <li><strong>Variable Name</strong> – User-defined name</li>
          <li><strong>Value</strong> – Data stored in the variable</li>
        </ul>
        <p><strong>Example:</strong> <code>int age = 25;</code></p>
      </section>

      {/* Variable Declaration */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Variable Declaration</h4>
        <p>Declaring a variable means telling the compiler about its name and type.</p>
        <pre style={styles.code}>
{`int a;     // Declares an integer
float b;   // Declares a float
char ch;   // Declares a character`}
        </pre>
      </section>

      {/* Types of Variables */}
      <section>
        <h4>🔹 Types of Variables in C</h4>
        <ul>
          <li><strong>1. Local Variable</strong> – Declared inside a function or block</li>
          <li><strong>2. Global Variable</strong> – Declared outside all functions</li>
          <li><strong>3. Static Variable</strong> – Retains value between function calls</li>
          <li><strong>4. Automatic Variable</strong> – Default type for local variables</li>
          <li><strong>5. External Variable</strong> – Declared using <code>extern</code> keyword, defined in another file</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  code: {
    backgroundColor: '#1e1e1e',
    color: '#f8f8f2',
    padding: '10px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    marginTop: '10px',
  },
};

export default CVariables;
