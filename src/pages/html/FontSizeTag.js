import React from 'react';

const headingCode = `<!DOCTYPE html>
<html>
<head>
  <title>Heading Tags Example</title>
</head>
<body>
  <h1>This is &lt;h1&gt; heading</h1>
  <h2>This is &lt;h2&gt; heading</h2>
  <h3>This is &lt;h3&gt; heading</h3>
  <h4>This is &lt;h4&gt; heading</h4>
  <h5>This is &lt;h5&gt; heading</h5>
  <h6>This is &lt;h6&gt; heading</h6>
</body>
</html>`;

const FontSizeTag = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Code: Heading Tags</h2>

      {/* Code block */}
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
        {headingCode}
      </pre>

      {/* Output */}
      <h2 style={{ marginTop: '40px', marginBottom: '20px' }}>Output:</h2>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        <h1>This is &lt;h1&gt; heading</h1>
        <h2>This is &lt;h2&gt; heading</h2>
        <h3>This is &lt;h3&gt; heading</h3>
        <h4>This is &lt;h4&gt; heading</h4>
        <h5>This is &lt;h5&gt; heading</h5>
        <h6>This is &lt;h6&gt; heading</h6>
      </div>
    </div>
  );
};

export default FontSizeTag;
