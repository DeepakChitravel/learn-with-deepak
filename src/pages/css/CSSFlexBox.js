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
    <div style={{ padding: '20px' }}>
      <h2>CSS Flexbox Example</h2>

      {/* Code Display */}
      <h4>CSS Code</h4>
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        <code>{codeString}</code>
      </pre>

      {/* Output Display */}
      <h4 style={{ marginTop: '30px' }}>Output</h4>
      <div style={containerStyle}>
        <div style={boxStyle}>Box 1</div>
        <div style={boxStyle}>Box 2</div>
        <div style={boxStyle}>Box 3</div>
      </div>
    </div>
  );
};

export default CSSFlexBox;
