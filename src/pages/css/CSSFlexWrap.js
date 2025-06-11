// src/pages/fundamentals/CSSFlexWrap.js
import React from 'react';

const CSSFlexWrap = () => {
  const code = `
/* flex-wrap examples */
.nowrap {
  display: flex;
  flex-wrap: nowrap;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
}

.box {
  width: 100px;
  height: 80px;
  background-color: #2196F3;
  color: white;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
`.trim();

  const boxStyle = {
    width: '100px',
    height: '80px',
    backgroundColor: '#2196F3',
    color: 'white',
    margin: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  };

  const renderBoxes = (count = 10) =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} style={boxStyle}>
        {i + 1}
      </div>
    ));

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Flex Container: flex-wrap</h2>

      {/* Code Block */}
      <h4>CSS Code</h4>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h4 style={{ marginTop: '30px' }}>Output</h4>

      <h5>1. flex-wrap: nowrap (default)</h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          border: '1px solid #ccc',
          padding: '10px',
          width: '100%',
          overflowX: 'auto',
          marginBottom: '20px',
        }}
      >
        {renderBoxes()}
      </div>

      <h5>2. flex-wrap: wrap</h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          border: '1px solid #ccc',
          padding: '10px',
          width: '400px',
          marginBottom: '20px',
        }}
      >
        {renderBoxes()}
      </div>

      <h5>3. flex-wrap: wrap-reverse</h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          border: '1px solid #ccc',
          padding: '10px',
          width: '400px',
          height: '200px',
        }}
      >
        {renderBoxes()}
      </div>
    </div>
  );
};

export default CSSFlexWrap;
