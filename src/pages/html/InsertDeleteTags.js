 import React from 'react';

const InsertDeleteTags = () => {
  const code = `
<!DOCTYPE html>
<html>
<head>
  <title>Insert and Delete Example</title>
</head>
<body>
  <p>The price of the book was <del>₹500</del> <ins>₹350</ins>.</p>
  <p>This sentence has a <del>wrong</del> <ins>correct</ins> word.</p>
</body>
</html>
  `.trim();

  const output = `
The price of the book was ₹500 ₹350.
This sentence has a wrong correct word.
  `.trim();

  const points = [
    { type: '<del> Tag', detail: 'Displays deleted/removed text with a strikethrough effect.' },
    { type: '<ins> Tag', detail: 'Shows inserted/added text with an underline.' },
    { type: 'Use Case', detail: 'Helpful for showing changes in pricing, editing revisions, or document updates.' },
    { type: 'Semantic Meaning', detail: 'Provides meaning for assistive technologies and browsers.' },
    { type: 'Inline Tags', detail: 'Both are inline elements and are used within text.' },
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
        &lt;ins&gt; and &lt;del&gt; Tags in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> tags are used to mark deleted and inserted text respectively.
        They are commonly used to show edits, pricing changes, and corrections.
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
        <p>The price of the book was <del>₹500</del> <ins>₹350</ins>.</p>
        <p>This sentence has a <del>wrong</del> <ins>correct</ins> word.</p>
      </div>
    </div>
  );
};

export default InsertDeleteTags;
