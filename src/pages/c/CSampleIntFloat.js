import React from 'react';

const CSampleIntFloat = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>C Program Examples: int and float</h2>

      {/* Single int example */}
      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Example 1: Single <code>int</code> Variable</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int age = 21;
    printf("Age is: %d", age);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>Age is: 21</code></p>
      </section>

      {/* Two int example */}
      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Example 2: Two <code>int</code> Variables</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("a = %d, b = %d", a, b);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>a = 10, b = 20</code></p>
      </section>

      {/* Float example */}
      <section>
        <h4>🔹 Example 3: <code>float</code> Variable</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    float pi = 3.14;
    printf("Value of pi: %.2f", pi);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>Value of pi: 3.14</code></p>
      </section>
    </div>
  );
};

const styles = {
  code: {
    backgroundColor: '#1e1e1e',
    color: '#f8f8f2',
    padding: '15px',
    borderRadius: '8px',
    overflowX: 'auto',
    fontFamily: 'monospace',
    fontSize: '14px',
    marginTop: '10px',
  },
};

export default CSampleIntFloat;
