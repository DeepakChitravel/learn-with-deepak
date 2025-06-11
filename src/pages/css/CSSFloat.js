// src/pages/fundamentals/CSSFloat.js
import React from 'react';

const CSSFloat = () => {
  const code = `
.image-left {
  float: left;
  margin-right: 20px;
}

.image-right {
  float: right;
  margin-left: 20px;
}

.container {
  overflow: auto; /* Clears float */
  padding: 10px;
}
  `.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Float and Its Types</h2>

      {/* Code Display */}
      <h4>CSS Code</h4>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#dcdcdc',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h4 style={{ marginTop: '30px' }}>Output</h4>
      <div style={{ overflow: 'auto', fontSize: '16px', lineHeight: '1.6' }}>
        <img
          src="https://via.placeholder.com/100"
          alt="Float Left"
          style={{ float: 'left', marginRight: '20px' }}
        />
        <p>
          This image is floated to the <strong>left</strong>. The paragraph text wraps around it. Float is useful when placing elements like images or boxes beside text content.
        </p>

        <div style={{ clear: 'both', marginTop: '30px' }} />

        <img
          src="https://via.placeholder.com/100"
          alt="Float Right"
          style={{ float: 'right', marginLeft: '20px' }}
        />
        <p>
          This image is floated to the <strong>right</strong>. Float works best when used carefully with margins and clear fixes to prevent layout issues.
        </p>
      </div>
    </div>
  );
};

export default CSSFloat;
