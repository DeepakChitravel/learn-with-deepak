// src/pages/fundamentals/FontSizeTag.js
import React from 'react';

const FontSizeTag = () => {
  const headingCode = `
<!DOCTYPE html>
<html>
<head>
  <title>Heading Tags Example</title>
</head>
<body>
  <h1>This is <h1> heading</h1>
  <h2>This is <h2> heading</h2>
  <h3>This is <h3> heading</h3>
  <h4>This is <h4> heading</h4>
  <h5>This is <h5> heading</h5>
  <h6>This is <h6> heading</h6>
</body>
</html>
  `.trim();

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🔠 HTML Font Sizes using Heading Tags
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, each with different font sizes to show content hierarchy.
      </p>

      {/* Code Snippet */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>💻 Code Snippet</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '20px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '15px',
        border: '1px solid #ddd'
      }}>
        <code>{headingCode}</code>
      </pre>

      {/* Output Preview */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>🖥️ Output Preview</h3>
      <div style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        border: '1px solid #ddd',
        color: '#333'
      }}>
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
