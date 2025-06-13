// src/pages/fundamentals/CSSFlexContainer.js
import React from 'react';

const CSSFlexContainer = () => {
  const code = `
/* flex-direction types */
.row {
  display: flex;
  flex-direction: row;
}
.row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
.column {
  display: flex;
  flex-direction: column;
}
.column-reverse {
  display: flex;
  flex-direction: column-reverse;
}
.box {
  width: 80px;
  height: 80px;
  background-color: #4CAF50;
  color: white;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
`.trim();

  const boxStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: '#4CAF50',
    color: 'white',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  };

  const renderBoxes = (count = 4) =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} style={boxStyle}>{String.fromCharCode(65 + i)}</div>
    ));

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Flex Container: flex-direction Variants</h2>

      {/* Code Display */}
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

      {/* Output Section */}
      <h4 style={{ marginTop: '30px' }}>Output</h4>

      <h5>1. flex-direction: row</h5>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>2. flex-direction: row-reverse</h5>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>3. flex-direction: column</h5>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>4. flex-direction: column-reverse</h5>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>
    </div>
  );
};

export default CSSFlexContainer;
