import React from 'react';

const code = `<!DOCTYPE html>
<html>
<head>
  <title>Basic HTML Tags Example</title>
</head>
<body>
  <p><b>This is bold text using &lt;b&gt;</b></p>
  <p><strong>This is strong text using &lt;strong&gt;</strong></p>
  <p><i>This is italic text using &lt;i&gt;</i></p>
  <p><em>This is emphasized text using &lt;em&gt;</em></p>
  <p><u>This is underlined text using &lt;u&gt;</u></p>
  <center>This text is centered using &lt;center&gt;</center>
</body>
</html>`;

const BasicTags = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Code: Basic Formatting Tags</h2>

      {/* Code Block */}
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
        <p><b>This is bold text using &lt;b&gt;</b></p>
        <p><strong>This is strong text using &lt;strong&gt;</strong></p>
        <p><i>This is italic text using &lt;i&gt;</i></p>
        <p><em>This is emphasized text using &lt;em&gt;</em></p>
        <p><u>This is underlined text using &lt;u&gt;</u></p>
        <div style={{ textAlign: 'center' }}>
          This text is centered using &lt;center&gt;
        </div>
      </div>
    </div>
  );
};

export default BasicTags;
