import React from 'react';

const PaddingBox = ({ label, code, style }) => (
  <div style={{ marginBottom: '30px' }}>
    <h4>{label}</h4>
    <div
      style={{
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        padding: '10px',
        fontFamily: 'Courier New',
        whiteSpace: 'pre-wrap',
        marginBottom: '10px',
      }}
    >
      {code}
    </div>
    <div
      style={{
        ...style,
        border: '2px solid #333',
        backgroundColor: '#eef',
        textAlign: 'center',
        fontSize: '14px',
      }}
    >
      Content with {label}
    </div>
  </div>
);

const Padding = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI' }}>
      <h2>📦 CSS Padding Properties</h2>
      <p>
        Padding is the space between the content and the border of an element. You can use shorthand <code>padding</code> or set each side individually using:
        <ul>
          <li><code>padding-top</code></li>
          <li><code>padding-right</code></li>
          <li><code>padding-bottom</code></li>
          <li><code>padding-left</code></li>
        </ul>
      </p>

      <PaddingBox
        label="All Sides (20px)"
        code={`div {\n  padding: 20px;\n}`}
        style={{ padding: '20px' }}
      />

      <PaddingBox
        label="Top Padding (30px)"
        code={`div {\n  padding-top: 30px;\n}`}
        style={{ paddingTop: '30px' }}
      />

      <PaddingBox
        label="Right Padding (40px)"
        code={`div {\n  padding-right: 40px;\n}`}
        style={{ paddingRight: '40px' }}
      />

      <PaddingBox
        label="Bottom Padding (25px)"
        code={`div {\n  padding-bottom: 25px;\n}`}
        style={{ paddingBottom: '25px' }}
      />

      <PaddingBox
        label="Left Padding (35px)"
        code={`div {\n  padding-left: 35px;\n}`}
        style={{ paddingLeft: '35px' }}
      />

      <PaddingBox
        label="TRBL (Top, Right, Bottom, Left)"
        code={`div {\n  padding: 10px 20px 30px 40px;\n}`}
        style={{ padding: '10px 20px 30px 40px' }}
      />
    </div>
  );
};

export default Padding;
