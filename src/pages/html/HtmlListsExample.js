import React from 'react';

const HtmlListsExample = () => {
  const orderedCode = `<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`;

  const unorderedCode = `<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>`;

  const definitionCode = `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`;

  return (
    <div
      style={{
        padding: '30px',
        background: '#fff',
        borderRadius: '10px',
        fontFamily: 'monospace',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        lineHeight: '1.7',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '26px',
          marginBottom: '20px',
          color: '#003366',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
        }}
      >
        📋 HTML Lists Overview
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        HTML provides different types of lists to structure content effectively:
      </p>
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li>
          <strong>&lt;ol&gt;</strong> – Ordered list with numbered items
        </li>
        <li>
          <strong>&lt;ul&gt;</strong> – Unordered list with bullet points
        </li>
        <li>
          <strong>&lt;dl&gt;</strong> – Definition list with terms and descriptions
        </li>
      </ul>

      {/* Ordered List */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>1. Ordered List Example</h3>
      <pre style={styles.codeBlock}>
        <code>{orderedCode}</code>
      </pre>
      <div style={styles.outputBox}>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </div>

      {/* Unordered List */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>2. Unordered List Example</h3>
      <pre style={styles.codeBlock}>
        <code>{unorderedCode}</code>
      </pre>
      <div style={styles.outputBox}>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Mango</li>
        </ul>
      </div>

      {/* Definition List */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>3. Definition List Example</h3>
      <pre style={styles.codeBlock}>
        <code>{definitionCode}</code>
      </pre>
      <div style={styles.outputBox}>
        <dl>
          <dt>
            <strong>HTML</strong>
          </dt>
          <dd>HyperText Markup Language</dd>
          <dt>
            <strong>CSS</strong>
          </dt>
          <dd>Cascading Style Sheets</dd>
        </dl>
      </div>
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '5px',
    overflowX: 'auto',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
  },
  outputBox: {
    background: '#e8f5e9',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#333',
    marginTop: '10px',
  },
};

export default HtmlListsExample;
