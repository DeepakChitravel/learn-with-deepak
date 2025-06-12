// src/pages/c/CSampleIntFloat.js

import React from 'react';

const CSampleIntFloat = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        C Program Examples: int and float
      </h2>

      {/* Example 1 */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e', fontSize: '20px' }}>🔹 Example 1: Single <code>int</code> Variable</h3>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int age = 21;
    printf("Age is: %d", age);
    return 0;
}`}
        </pre>
        <h4 style={styles.outputHeading}>Output</h4>
        <pre style={styles.outputBox}>
          <code>Age is: 21</code>
        </pre>
      </section>

      {/* Example 2 */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#1a237e', fontSize: '20px' }}>🔹 Example 2: Two <code>int</code> Variables</h3>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("a = %d, b = %d", a, b);
    return 0;
}`}
        </pre>
        <h4 style={styles.outputHeading}>Output</h4>
        <pre style={styles.outputBox}>
          <code>a = 10, b = 20</code>
        </pre>
      </section>

      {/* Example 3 */}
      <section>
        <h3 style={{ color: '#1a237e', fontSize: '20px' }}>🔹 Example 3: <code>float</code> Variable</h3>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    float pi = 3.14;
    printf("Value of pi: %.2f", pi);
    return 0;
}`}
        </pre>
        <h4 style={styles.outputHeading}>Output</h4>
        <pre style={styles.outputBox}>
          <code>Value of pi: 3.14</code>
        </pre>
      </section>
    </div>
  );
};

const styles = {
  code: {
    backgroundColor: '#f4f4f4',
    color: '#000',
    padding: '15px',
    borderRadius: '8px',
    overflowX: 'auto',
    fontFamily: 'monospace',
    fontSize: '14px',
    marginTop: '10px'
  },
  outputHeading: {
    color: '#1a237e',
    fontSize: '18px',
    marginTop: '15px',
    marginBottom: '5px'
  },
  outputBox: {
    backgroundColor: '#e8f5e9',
    padding: '10px',
    borderRadius: '6px'
  }
};

export default CSampleIntFloat;
