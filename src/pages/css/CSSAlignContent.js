// src/pages/fundamentals/CSSAlignContent.js
import React from 'react';

const CSSAlignContent = () => {
  const code = `
/* align-content examples */
.align-center {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.align-stretch {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}

.align-start {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.align-end {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}

.align-around {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}

.align-between {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.align-evenly {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
}

.box {
  width: 80px;
  height: 80px;
  background-color: #009688;
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
    backgroundColor: '#009688',
    color: 'white',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  };

  const renderBoxes = (count = 10) =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} style={boxStyle}>{String.fromCharCode(65 + i)}</div>
    ));

  const containerStyle = (alignType) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: alignType,
    height: '250px',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
  });

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Flex Container: align-content</h2>

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

      <h5>1. align-content: center</h5>
      <div style={containerStyle('center')}>
        {renderBoxes()}
      </div>

      <h5>2. align-content: stretch</h5>
      <div style={containerStyle('stretch')}>
        {renderBoxes()}
      </div>

      <h5>3. align-content: flex-start</h5>
      <div style={containerStyle('flex-start')}>
        {renderBoxes()}
      </div>

      <h5>4. align-content: flex-end</h5>
      <div style={containerStyle('flex-end')}>
        {renderBoxes()}
      </div>

      <h5>5. align-content: space-around</h5>
      <div style={containerStyle('space-around')}>
        {renderBoxes()}
      </div>

      <h5>6. align-content: space-between</h5>
      <div style={containerStyle('space-between')}>
        {renderBoxes()}
      </div>

      <h5>7. align-content: space-evenly</h5>
      <div style={containerStyle('space-evenly')}>
        {renderBoxes()}
      </div>
    </div>
  );
};

export default CSSAlignContent;
