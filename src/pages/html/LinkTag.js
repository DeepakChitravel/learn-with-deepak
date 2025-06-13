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
`.trim();

const LinkTag = () => {
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
        🔗 HTML <code>&lt;link&gt;</code> Tag
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>&lt;link&gt;</code> tag in HTML is used to link external resources to a web document. 
        It is commonly used to link stylesheets, fonts, and icons.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li><strong>Stylesheet Linking:</strong> Links an external CSS file to style your HTML content.</li>
        <li><strong>Font Linking:</strong> Loads web fonts (like Google Fonts) into your page.</li>
        <li><strong>Favicon Linking:</strong> Sets a small website icon that appears in the browser tab.</li>
        <li><strong>Inside &lt;head&gt;:</strong> The <code>&lt;link&gt;</code> tag should always be placed in the <code>&lt;head&gt;</code> section.</li>
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Code Example</h3>
      <div style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        overflowX: 'auto',
        border: '1px solid #e0e0e0'
      }}>
        <SyntaxHighlighter language="html" style={oneLight} customStyle={{
          margin: 0,
          padding: '20px',
          fontSize: '14px',
        }}>
          {linkTagCode}
        </SyntaxHighlighter>
      </div>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Rendered Output</h3>
      <div style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: '#1e88e5' }}>Hello with Linked Style!</h1>
        <p>This text is using the <strong>Roboto</strong> font from Google Fonts and styled using inline CSS.</p>
      </div>
    </div>
  );
};

export default LinkTag;
