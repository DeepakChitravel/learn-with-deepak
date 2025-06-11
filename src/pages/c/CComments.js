import React from 'react';

const CComments = () => {
  const code = `
#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello, World!\\n");

    /* 
       This is a multi-line comment.
       It can span multiple lines.
    */
    printf("Learning C Comments!\\n");

    return 0;
}
`.trim();

  const output = `
Hello, World!
Learning C Comments!
`.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Comments in C</h2>

      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 What is a Comment?</h4>
        <p>
          Comments are non-executable statements used to explain the code. They help make code readable and maintainable.
          Comments are ignored by the compiler.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Types of Comments in C</h4>
        <ul>
          <li><strong>Single-line Comment</strong> – Starts with <code>//</code></li>
          <li><strong>Multi-line Comment</strong> – Enclosed between <code>/*</code> and <code>*/</code></li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Sample Code</h4>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}>
          <code>{code}</code>
        </pre>
      </section>

      <section>
        <h4>🔹 Output</h4>
        <pre style={{
          backgroundColor: '#f4f4f4',
          color: '#000',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}>
          <code>{output}</code>
        </pre>
      </section>
    </div>
  );
};

export default CComments;
