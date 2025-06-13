import React from 'react';

const FaviconTag = () => {
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
</html>`.trim();

  const points = [
    "`<link rel=\"icon\">` is used to add a favicon to your webpage.",
    "Favicon appears in the browser tab next to the page title.",
    "You can use `.ico`, `.png`, or `.svg` formats.",
    "The favicon file is usually placed in the root folder or assets.",
    "`type=\"image/x-icon\"` is common but not strictly required."
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Title */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        🔖 HTML Favicon Tag Example
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧾 HTML Code</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{faviconCode}</code>
      </pre>

      {/* Output Preview */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🔍 Favicon Preview</h3>
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
