import React from 'react';

const CSSFlexBox = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '200px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    marginTop: '20px',
  };

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#4CAF50',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    fontSize: '18px',
  };

  const codeString = `
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
  padding: 10px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
  `.trim();

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
        CSS Flexbox Example
      </h2>

      <p style={{ fontSize: '16px' }}>
        Flexbox (Flexible Box Layout) is a CSS3 layout model that allows items to align and distribute space within a container, even when their size is unknown or dynamic. It helps build responsive, space-efficient UI layouts.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>CSS Code</h3>
      <div
        style={{
          backgroundColor: '#f4f4f4',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '15px',
          overflowX: 'auto',
          fontFamily: 'monospace',
          fontSize: '15px',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.6',
        }}
      >
        <code>{codeString}</code>
      </div>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Output</h3>
      <div style={containerStyle}>
        <div style={boxStyle}>Box 1</div>
        <div style={boxStyle}>Box 2</div>
        <div style={boxStyle}>Box 3</div>
      </div>

      <p style={{ fontStyle: 'italic', color: '#777', textAlign: 'center', marginTop: '20px' }}>
        This layout uses <code>display: flex</code> with <code>justify-content</code> and <code>align-items</code> for alignment.
      </p>
    </div>
  );
};

export default CSSFlexBox;
