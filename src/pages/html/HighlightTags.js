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
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Code: &lt;mark&gt; Tag</h2>

      {/* Code Display */}
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '14px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {code}
      </pre>

      {/* Output Display */}
      <h2 style={{ marginTop: '40px', marginBottom: '20px' }}>Output:</h2>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        <p>This is a normal paragraph.</p>
        <p>This is <mark>highlighted text</mark> using &lt;mark&gt; tag.</p>
      </div>
    </div>
  );
};

export default HighlightTags;
