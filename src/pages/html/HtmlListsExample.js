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
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f9f9f9' }}>
      <h2>📋 HTML Lists Overview</h2>
      <p>HTML provides different types of lists to display data in an organized way:</p>
      <ul>
        <li><strong>Ordered List (&lt;ol&gt;):</strong> Displays items with numbers.</li>
        <li><strong>Unordered List (&lt;ul&gt;):</strong> Displays items with bullet points.</li>
        <li><strong>Definition List (&lt;dl&gt;):</strong> Displays terms and their descriptions.</li>
      </ul>

      {/* Ordered List */}
      <h3 style={{ marginTop: '30px' }}>1. Ordered List Example</h3>
      <pre style={styles.codeBlock}>{orderedCode}</pre>
      <div style={styles.outputBox}>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </div>

      {/* Unordered List */}
      <h3 style={{ marginTop: '30px' }}>2. Unordered List Example</h3>
      <pre style={styles.codeBlock}>{unorderedCode}</pre>
      <div style={styles.outputBox}>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Mango</li>
        </ul>
      </div>

      {/* Definition List */}
      <h3 style={{ marginTop: '30px' }}>3. Definition List Example</h3>
      <pre style={styles.codeBlock}>{definitionCode}</pre>
      <div style={styles.outputBox}>
        <dl>
          <dt><strong>HTML</strong></dt>
          <dd>HyperText Markup Language</dd>
          <dt><strong>CSS</strong></dt>
          <dd>Cascading Style Sheets</dd>
        </dl>
      </div>
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#272822',
    color: '#f8f8f2',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
  },
  outputBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    marginTop: '10px',
  },
};

export default HtmlListsExample;
