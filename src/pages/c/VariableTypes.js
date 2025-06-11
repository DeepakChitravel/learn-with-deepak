import React from 'react';

const VariableTypes = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>📘 Types of Variables in C</h2>

      {/* Intro */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 What is a Variable?</h4>
        <p>
          A variable is a named memory location used to store data. In C, different types of variables exist based on scope, storage class, and lifetime.
        </p>
      </section>

      {/* Types */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Types of Variables in C</h4>
        <ul>
          <li><strong>Local Variable</strong> – Declared inside a function/block; accessible only within it.</li>
          <li><strong>Global Variable</strong> – Declared outside all functions; accessible throughout the program.</li>
          <li><strong>Static Variable</strong> – Retains its value between function calls.</li>
          <li><strong>Extern Variable</strong> – Declared using <code>extern</code> to access a global variable from another file.</li>
          <li><strong>Automatic Variable</strong> – Default variable inside a function (same as local).</li>
          <li><strong>Register Variable</strong> – Stored in CPU register for fast access (suggestion to compiler).</li>
        </ul>
      </section>

      {/* Sample Code */}
      <section style={{ marginBottom: '20px' }}>
        <h4>🧪 Sample Code</h4>
        <pre style={{ background: '#f4f4f4', padding: '10px' }}>
          <code>
{`#include <stdio.h>

int globalVar = 10; // Global variable

void testFunction() {
    static int staticVar = 0; // Static variable
    int localVar = 5;         // Local variable
    staticVar++;
    printf("Local: %d, Static: %d, Global: %d\\n", localVar, staticVar, globalVar);
}

int main() {
    testFunction();
    testFunction();
    return 0;
}`}
          </code>
        </pre>
      </section>

      {/* Output */}
      <section>
        <h4>📤 Expected Output</h4>
        <pre style={{ background: '#eef', padding: '10px' }}>
{`Local: 5, Static: 1, Global: 10
Local: 5, Static: 2, Global: 10`}
        </pre>
      </section>
    </div>
  );
};

export default VariableTypes;
