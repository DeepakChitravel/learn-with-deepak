import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const faviconCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Favicon Example</title>

  <!-- Link to Favicon -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <h1>Welcome to My Site!</h1>
</body>
</html>
`;

const FaviconTag = () => {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🖼️ HTML <code>&lt;link rel="icon"&gt;</code> (Favicon) Tag Demo</h2>

      <p>The <code>&lt;link rel="icon"&gt;</code> tag is used to show a small image (favicon) on the browser tab.</p>

      <h4>📌 HTML Code:</h4>
      <SyntaxHighlighter language="html" style={oneLight}>
        {faviconCode}
      </SyntaxHighlighter>

      <h4>⚙️ Output Preview:</h4>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '15px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          maxWidth: '500px',
          background: '#f1f1f1',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/73/Icon_tools.png"
          alt="favicon"
          width="24"
          height="24"
          style={{ border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <span style={{ fontWeight: 'bold' }}>Favicon Example - Browser Tab Preview</span>
      </div>
    </div>
  );
};

export default FaviconTag;
