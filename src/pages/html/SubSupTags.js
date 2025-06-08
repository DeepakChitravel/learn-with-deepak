import React from 'react';

const code = `<!DOCTYPE html>
<html>
<head>
  <title>Subscript and Superscript Example</title>
</head>
<body>
  <p>Water formula is H<sub>2</sub>O</p>
  <p>Einstein's equation: E = mc<sup>2</sup></p>
</body>
</html>`;

const SubSupTags = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Code: &lt;sub&gt; and &lt;sup&gt; Tags</h2>

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
        <p>Water formula is H<sub>2</sub>O</p>
        <p>Einstein's equation: E = mc<sup>2</sup></p>
      </div>
    </div>
  );
};

export default SubSupTags;
