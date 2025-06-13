// src/pages/fundamentals/CSSTransform3D.js
import React from 'react';

const CSSTransform3D = () => {
  const code = `
/* Base box style */
.box {
  width: 120px;
  height: 120px;
  background-color: #009688;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  border-radius: 10px;
  transition: transform 0.5s;
  perspective: 800px;
}

/* 3D Transforms */
.rotate-x {
  transform: rotateX(45deg);
}

.rotate-y {
  transform: rotateY(45deg);
}

.rotate-z {
  transform: rotateZ(45deg);
}
`.trim();

  const boxBase = {
    width: '120px',
    height: '120px',
    backgroundColor: '#009688',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    borderRadius: '10px',
    transition: 'transform 0.5s',
    fontSize: '16px',
  };

  const transforms = [
    { label: 'rotateX(45deg)', style: { transform: 'rotateX(45deg)' } },
    { label: 'rotateY(45deg)', style: { transform: 'rotateY(45deg)' } },
    { label: 'rotateZ(45deg)', style: { transform: 'rotateZ(45deg)' } },
  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS 3D Transform Examples</h2>

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
      <div style={{ display: 'flex', flexWrap: 'wrap', perspective: '800px' }}>
        {transforms.map((item, i) => (
          <div key={i} style={{ textAlign: 'center', margin: '10px' }}>
            <div style={{ ...boxBase, ...item.style }}>{item.label}</div>
            <div style={{ fontSize: '13px', marginTop: '5px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSTransform3D;
