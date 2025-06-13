// src/pages/fundamentals/CSSJustifyContent.js
import React from 'react';

const CSSJustifyContent = () => {
  const code = `
/* justify-content examples */
.justify-center {
  display: flex;
  justify-content: center;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-space-around {
  display: flex;
  justify-content: space-around;
}

.justify-space-between {
  display: flex;
  justify-content: space-between;
}

.justify-space-evenly {
  display: flex;
  justify-content: space-evenly;
}

.box {
  width: 80px;
  height: 80px;
  background-color: #FF5722;
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
    backgroundColor: '#FF5722',
    color: 'white',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  };

  const renderBoxes = (count = 3) =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} style={boxStyle}>{String.fromCharCode(65 + i)}</div>
    ));

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Flex Container: justify-content</h2>

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

      <h4 style={{ marginTop: '30px' }}>Output</h4>

      <h5>1. justify-content: center</h5>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>2. justify-content: flex-start</h5>
      <div style={{ display: 'flex', justifyContent: 'flex-start', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>3. justify-content: flex-end</h5>
      <div style={{ display: 'flex', justifyContent: 'flex-end', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>4. justify-content: space-around</h5>
      <div style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>5. justify-content: space-between</h5>
      <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>

      <h5>6. justify-content: space-evenly</h5>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {renderBoxes()}
      </div>
    </div>
  );
};

export default CSSJustifyContent;
