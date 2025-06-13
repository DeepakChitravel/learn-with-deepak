import React from 'react';

const code = `<!DOCTYPE html>
<html>
<head>
  <title>Highlight Tag Example</title>
</head>
<body>
  <p>This is a normal paragraph.</p>
  <p>This is <mark>highlighted text</mark> using &lt;mark&gt; tag.</p>
</body>
</html>`;

const HighlightTags = () => {
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
        🔖 HTML <code>&lt;mark&gt;</code> Tag Demonstration
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>&lt;mark&gt;</code> tag in HTML is used to highlight text. It renders the content with a yellow background by default.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧾 Code Example</h3>
      <pre
        style={{
          background: '#f4f4f4',
          padding: '15px',
          borderRadius: '5px',
          overflowX: 'auto',
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
        }}
      >
        <code>{code}</code>
      </pre>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>⚙️ Output Preview</h3>
      <div
        style={{
          background: '#e8f5e9',
          padding: '20px',
          borderRadius: '5px',
          fontSize: '14px',
          color: '#333',
        }}
      >
        <p>This is a normal paragraph.</p>
        <p>
          This is{' '}
          <mark style={{ backgroundColor: '#ffff00', padding: '2px 4px' }}>
            highlighted text
          </mark>{' '}
          using &lt;mark&gt; tag.
        </p>
      </div>
    </div>
  );
};

export default HighlightTags;
