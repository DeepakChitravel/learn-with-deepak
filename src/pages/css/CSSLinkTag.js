import React from 'react';

const CSSLinkTag = () => {
  const inlineStyle = {
    color: 'blue',
    fontSize: '18px',
  };

  return (
    <div
      style={{
        padding: '30px',
        background: '#fff',
        borderRadius: '10px',
        fontFamily: 'monospace',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        lineHeight: '1.7'
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '26px',
          marginBottom: '20px',
          color: '#003366',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px'
        }}
      >
        CSS Styling: Inline, Internal, and External
      </h2>

      {/* Inline CSS */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>1. Inline CSS</h3>
      <p>Inline styles are written directly in the element using the <code>style</code> attribute.</p>
      <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        <code>
{`<p style={{ color: 'blue', fontSize: '18px' }}>
  This is inline styled text.
</p>`}
        </code>
      </pre>
      <p style={inlineStyle}>This is inline styled text.</p>

      {/* Internal CSS */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>2. Internal CSS</h3>
      <p>Internal CSS is defined inside a <code>&lt;style&gt;</code> tag, typically within the HTML or component head.</p>
      <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        <code>
{`<style>
  { \`
    .internal-style {
      color: darkgreen;
      font-weight: bold;
      font-size: 20px;
    }
  \` }
</style>

<p className="internal-style">
  This is internal styled text.
</p>`}
        </code>
      </pre>
      <style>
        {`
          .internal-style {
            color: darkgreen;
            font-weight: bold;
            font-size: 20px;
          }
        `}
      </style>
      <p className="internal-style">This is internal styled text.</p>

      {/* External CSS */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>3. External CSS</h3>
      <p>External CSS is stored in a separate file and linked using the <code>&lt;link&gt;</code> tag. Here we simulate it inline:</p>
      <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        <code>
{`/* styles.css */
.external-style {
  color: purple;
  background-color: #f3e5f5;
  padding: 10px;
  border-left: 5px solid purple;
  font-size: 18px;
}

/* Used in component */
<p className="external-style">
  This is external styled text.
</p>`}
        </code>
      </pre>
      <style>
        {`
          .external-style {
            color: purple;
            background-color: #f3e5f5;
            padding: 10px;
            border-left: 5px solid purple;
            font-size: 18px;
          }
        `}
      </style>
      <p className="external-style">This is external styled text.</p>

      <p className="text-center mt-4" style={{ fontStyle: 'italic', color: '#777' }}>
        These are the three main ways to style HTML using CSS.
      </p>
    </div>
  );
};

export default CSSLinkTag;
