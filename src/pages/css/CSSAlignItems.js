// src/pages/fundamentals/CSSAlignItems.js
import React from 'react';

const CSSAlignItems = () => {
  const code = `
/* align-items examples */
.align-center {
  display: flex;
  align-items: center;
}

.align-start {
  display: flex;
  align-items: flex-start;
}

.align-end {
  display: flex;
  align-items: flex-end;
}

.align-stretch {
  display: flex;
  align-items: stretch;
}

.align-baseline {
  display: flex;
  align-items: baseline;
}

.align-normal {
  display: flex;
  align-items: normal;
}

.box {
  width: 80px;
  background-color: #673AB7;
  color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 6px;
}
`.trim();

  const getBoxes = (customHeight = true) =>
    ['A', 'B', 'C'].map((label, i) => (
      <div
        key={i}
        style={{
          width: '80px',
          height: customHeight ? `${60 + i * 20}px` : 'auto',
          backgroundColor: '#673AB7',
          color: 'white',
          margin: '5px',
          padding: '10px',
          borderRadius: '6px',
          fontSize: i === 1 ? '24px' : '16px',
        }}
      >
        {label}
      </div>
    ));

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Flex Container: align-items</h2>

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

      <h5>1. align-items: center</h5>
      <div style={{ display: 'flex', alignItems: 'center', height: '150px', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {getBoxes()}
      </div>

      <h5>2. align-items: flex-start</h5>
      <div style={{ display: 'flex', alignItems: 'flex-start', height: '150px', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {getBoxes()}
      </div>

      <h5>3. align-items: flex-end</h5>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '150px', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {getBoxes()}
      </div>

      <h5>4. align-items: stretch</h5>
      <div style={{ display: 'flex', alignItems: 'stretch', height: '150px', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {/* remove custom height so stretch can apply */}
        {getBoxes(false)}
      </div>

      <h5>5. align-items: baseline</h5>
      <div style={{ display: 'flex', alignItems: 'baseline', height: '150px', border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        {getBoxes()}
      </div>

      <h5>6. align-items: normal</h5>
      <div style={{ display: 'flex', alignItems: 'normal', height: '150px', border: '1px solid #ccc', padding: '10px' }}>
        {getBoxes()}
      </div>
    </div>
  );
};

export default CSSAlignItems;
