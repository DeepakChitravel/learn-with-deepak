import React from 'react';

const CSubMulDiv = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>C Program Examples: Subtraction, Multiplication, Division</h2>

      {/* Subtraction */}
      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Subtraction</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int a = 20, b = 8;
    int result = a - b;
    printf("Subtraction = %d", result);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>Subtraction = 12</code></p>
      </section>

      {/* Multiplication */}
      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Multiplication</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int x = 6, y = 7;
    int result = x * y;
    printf("Multiplication = %d", result);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>Multiplication = 42</code></p>
      </section>

      {/* Division */}
      <section>
        <h4>🔹 Division</h4>
        <pre style={styles.code}>
{`#include <stdio.h>

int main() {
    int a = 20, b = 4;
    int result = a / b;
    printf("Division = %d", result);
    return 0;
}`}
        </pre>
        <p><strong>Output:</strong> <code>Division = 5</code></p>
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

export default CSubMulDiv;
