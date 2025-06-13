import React from 'react';

const NestedList = () => {
  const code = `
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Tomato</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
  `.trim();

  const points = [
    { type: 'What is a Nested List?', detail: 'A list placed inside another list to represent hierarchy or grouping.' },
    { type: 'Use in HTML', detail: 'You can nest <ul> or <ol> elements within <li> elements.' },
    { type: 'Common Usage', detail: 'Used in menus, categories, or multi-level data.' },
    { type: 'Semantic HTML', detail: 'Helps organize content and improves accessibility.' },
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
        📝 Nested Lists in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Nested lists are used to create multi-level lists within HTML. They help group related items together in a structured format.
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
        <ul>
          <li>Fruits
            <ul>
              <li>Apple</li>
              <li>Banana</li>
              <li>Mango</li>
            </ul>
          </li>
          <li>Vegetables
            <ul>
              <li>Carrot</li>
              <li>Tomato</li>
              <li>Spinach</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedList;
