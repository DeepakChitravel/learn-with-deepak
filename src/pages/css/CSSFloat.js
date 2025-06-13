import React from 'react';

const CSSFloat = () => {
  const codeString = `
.container {
  overflow: auto;
}

.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #2196F3;
  color: white;
  text-align: center;
  line-height: 100px;
  margin-right: 20px;
  border-radius: 6px;
  font-size: 18px;
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
        CSS Float Example
      </h2>

      <p style={{ fontSize: '16px' }}>
        The <code>float</code> property in CSS allows elements to be positioned to the left or right, letting text or other elements wrap around them.
      </p>

      {/* Code Section */}
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

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Output</h3>
      <div style={{ overflow: 'auto', height: '120px' }}>
        <div
          style={{
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: '#2196F3',
            color: 'white',
            textAlign: 'center',
            lineHeight: '100px',
            marginRight: '20px',
            borderRadius: '6px',
            fontSize: '18px',
          }}
        >
          Box 1
        </div>
        <div
          style={{
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: '#2196F3',
            color: 'white',
            textAlign: 'center',
            lineHeight: '100px',
            marginRight: '20px',
            borderRadius: '6px',
            fontSize: '18px',
          }}
        >
          Box 2
        </div>
        <div
          style={{
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: '#2196F3',
            color: 'white',
            textAlign: 'center',
            lineHeight: '100px',
            borderRadius: '6px',
            fontSize: '18px',
          }}
        >
          Box 3
        </div>
      </div>

      <p style={{ fontStyle: 'italic', color: '#777', textAlign: 'center', marginTop: '20px' }}>
        This layout uses <code>float: left</code> to place boxes side-by-side.
      </p>
    </div>
  );
};

export default CSSFloat;
