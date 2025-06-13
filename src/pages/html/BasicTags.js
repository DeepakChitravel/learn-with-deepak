import React from 'react';

const BasicTags = () => {
  const code = `
<!DOCTYPE html>
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
</html>`.trim();

  const output = `
<b>This is bold text using <b></b></b>
<strong>This is strong text using <strong></strong></strong>
<i>This is italic text using <i></i></i>
<em>This is emphasized text using <em></em></em>
<u>This is underlined text using <u></u></u>
<center>This text is centered using <center></center></center>`.trim();

  const points = [
    "`<b>` makes text bold, but `<strong>` adds semantic importance.",
    "`<i>` italicizes text, while `<em>` also adds emphasis.",
    "`<u>` underlines text (used rarely in modern HTML).",
    "`<center>` is deprecated; use CSS `text-align: center` instead.",
    "Prefer semantic tags like `<strong>` and `<em>` over `<b>` and `<i>`."
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
      {/* Heading */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Basic HTML Formatting Tags
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
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
        style={{
          border: '1px solid #ddd',
          borderRadius: '6px',
          padding: '20px',
          backgroundColor: '#fefefe',
          fontSize: '16px',
          lineHeight: '1.6'
        }}
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </div>
  );
};

export default BasicTags;
