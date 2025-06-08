import React from 'react';

const code = `<!DOCTYPE html>
<html>
<head>
  <title>Insert and Delete Example</title>
</head>
<body>
  <p>The price of the book was <del>₹500</del> <ins>₹350</ins>.</p>
  <p>This sentence has a <del>wrong</del> <ins>correct</ins> word.</p>
</body>
</html>`;

const InsertDeleteTags = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>&lt;ins&gt; and &lt;del&gt; Tags in HTML</h2>

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

      {/* Output Preview */}
      <h2 style={{ marginTop: '40px', marginBottom: '20px' }}>Output:</h2>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        <p>The price of the book was <del>₹500</del> <ins>₹350</ins>.</p>
        <p>This sentence has a <del>wrong</del> <ins>correct</ins> word.</p>
      </div>
    </div>
  );
};

export default InsertDeleteTags;
