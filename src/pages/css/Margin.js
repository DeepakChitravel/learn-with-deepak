import React from 'react';

const boxStyle = {
  border: '2px solid #555',
  padding: '20px',
  backgroundColor: '#f0f8ff',
  fontFamily: 'Segoe UI',
};

const codeStyle = {
  backgroundColor: '#f8f9fa',
  padding: '10px',
  borderRadius: '5px',
  fontFamily: 'Courier New',
  whiteSpace: 'pre-wrap',
  marginTop: '10px',
  border: '1px solid #ccc',
};

const Margin = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h2 className="mb-4">📏 CSS Margin Properties</h2>

      <p>
        CSS margin properties are used to create space <strong>outside</strong> the element's border.
        You can control margin on each side of the element: <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>.
      </p>

      {/* Margin Top */}
      <div style={{ ...boxStyle, marginTop: '40px' }}>
        <strong>Margin Top</strong>: 40px
      </div>
      <div style={codeStyle}>
        {`div {
  margin-top: 40px;
}`}
      </div>

      {/* Margin Bottom */}
      <div style={{ ...boxStyle, marginBottom: '40px', marginTop: '30px' }}>
        <strong>Margin Bottom</strong>: 40px
      </div>
      <div style={codeStyle}>
        {`div {
  margin-bottom: 40px;
}`}
      </div>

      {/* Margin Left */}
      <div style={{ ...boxStyle, marginLeft: '50px', marginTop: '30px' }}>
        <strong>Margin Left</strong>: 50px
      </div>
      <div style={codeStyle}>
        {`div {
  margin-left: 50px;
}`}
      </div>

      {/* Margin Right */}
      <div style={{ ...boxStyle, marginRight: '50px', marginTop: '30px' }}>
        <strong>Margin Right</strong>: 50px
      </div>
      <div style={codeStyle}>
        {`div {
  margin-right: 50px;
}`}
      </div>

      {/* Shorthand Margin */}
      <div style={{ ...boxStyle, margin: '20px 40px 60px 80px', marginTop: '30px' }}>
        <strong>Margin (Shorthand)</strong>: top right bottom left = <code>20px 40px 60px 80px</code>
      </div>
      <div style={codeStyle}>
        {`div {
  margin: 20px 40px 60px 80px;
}`}
      </div>

      <p className="mt-4 text-muted fst-italic">Margins help to create space between elements for a clean layout.</p>
    </div>
  );
};

export default Margin;
