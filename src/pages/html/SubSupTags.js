import React from 'react';

const SubSupTags = () => {
  const code = `
<!DOCTYPE html>
<html>
<head>
  <title>Subscript and Superscript Example</title>
</head>
<body>
  <p>Water formula is H<sub>2</sub>O</p>
  <p>Einstein's equation: E = mc<sup>2</sup></p>
</body>
</html>
  `.trim();

  const output = `
Water formula is H₂O
Einstein's equation: E = mc²
  `.trim();

  const points = [
    { type: '<sub> Tag', detail: 'Defines subscript text that appears slightly below the normal text line (e.g., H₂O).' },
    { type: '<sup> Tag', detail: 'Defines superscript text that appears slightly above the normal text line (e.g., x²).' },
    { type: 'Usage in Science/Math', detail: 'Commonly used in chemical formulas and mathematical expressions.' },
    { type: 'Improves Semantics', detail: 'Enhances meaning and readability for technical content.' },
    { type: 'Inline Elements', detail: 'Both tags are inline and can be used within a line of text.' },
  ];

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
        &lt;sub&gt; and &lt;sup&gt; Tags in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code> tags are used to display subscript and superscript text respectively in HTML. These are useful in scientific, mathematical, and chemical contexts.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <div style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px'
      }}>
        <p>Water formula is H<sub>2</sub>O</p>
        <p>Einstein's equation: E = mc<sup>2</sup></p>
      </div>
    </div>
  );
};

export default SubSupTags;
