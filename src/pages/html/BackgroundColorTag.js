import React from 'react';

const BackgroundColorTag = () => {
  const code = `<!DOCTYPE html>
<html>
<head>
  <title>Preferred Background Color Example</title>
  <style>
    body {
      background-color: lightyellow;
      font-family: Arial, sans-serif;
    }

    .highlight-section {
      background-color: lightblue;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h2>This page has a light yellow background using CSS</h2>

  <hr>

  <div class="highlight-section">
    This section uses modern CSS instead of deprecated <code>bgcolor</code>.
  </div>
</body>
</html>`.trim();

  const infoPoints = [
    "Using CSS is the preferred way to set background colors.",
    "`style=\"background-color: ...\"` can be used for inline styling.",
    "The `bgcolor` attribute is deprecated and should be avoided.",
    "For tables or sections, use CSS classes with `background-color`.",
    "Always keep structure and design separate using external or internal CSS."
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
      {/* Header */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Background Color in HTML
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {infoPoints.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Code</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Output</h3>
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        style={{
          border: '1px solid #ddd',
          borderRadius: '6px',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default BackgroundColorTag;
