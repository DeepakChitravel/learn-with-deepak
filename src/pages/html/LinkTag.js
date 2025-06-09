import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const linkTagCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Link Tag Example</title>

  <!-- Link External CSS -->
  <link rel="stylesheet" href="style.css" />

  <!-- Link Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

  <!-- Link Favicon -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>
<body>
  <h1>Hello with Linked Style!</h1>
</body>
</html>
`;

const LinkTag = () => {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🔗 HTML <code>&lt;link&gt;</code> Tag Demo</h2>

      <p>The <code>&lt;link&gt;</code> tag is used to connect external resources like CSS, fonts, and favicons.</p>

      <h4>📌 Code Example:</h4>
      <SyntaxHighlighter language="html" style={oneLight}>
        {linkTagCode}
      </SyntaxHighlighter>

      <h4>⚙️ Output Preview:</h4>
      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          maxWidth: '600px',
        }}
      >
        <h1 style={{ color: '#1e88e5' }}>Hello with Linked Style!</h1>
        <p>This text is using the <strong>Roboto</strong> font from Google Fonts and styled using inline CSS.</p>
      </div>
    </div>
  );
};

export default LinkTag;
