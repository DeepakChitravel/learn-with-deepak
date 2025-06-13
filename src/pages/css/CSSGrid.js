// src/pages/fundamentals/CSSGrid.js
import React from 'react';

const CSSGrid = () => {
  const code = `
/* Grid container with 3 columns and 2 rows */
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 10px;
  padding: 10px;
}

.grid-item {
  background-color: #3f51b5;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}
`.trim();

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto',
    gap: '10px',
    padding: '10px',
    border: '1px solid #ccc',
  };

  const gridItemStyle = {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '6px',
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Grid Example</h2>

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
      <div style={gridContainerStyle}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={gridItemStyle}>Item {i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default CSSGrid;
