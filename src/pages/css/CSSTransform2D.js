// src/pages/fundamentals/CSSTransform2D.js
import React from 'react';

const CSSTransform2D = () => {
  const code = `
/* Common transform styles */
.box {
  width: 100px;
  height: 100px;
  background-color: #f44336;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* 1. Translate */
.translate {
  transform: translate(40px, 20px);
}

/* 2. Rotate */
.rotate {
  transform: rotate(45deg);
}

/* 3. ScaleX */
.scalex {
  transform: scaleX(1.5);
}

/* 4. ScaleY */
.scaley {
  transform: scaleY(1.5);
}

/* 5. Scale */
.scale {
  transform: scale(1.5);
}

/* 6. SkewX */
.skewx {
  transform: skewX(20deg);
}

/* 7. SkewY */
.skewy {
  transform: skewY(20deg);
}

/* 8. Matrix (scaleX, skewY, skewX, scaleY, translateX, translateY) */
.matrix {
  transform: matrix(1, 0.5, -0.5, 1, 30, 20);
}
`.trim();

  const boxBase = {
    width: '100px',
    height: '100px',
    backgroundColor: '#f44336',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const transforms = [
    { label: 'translate(40px, 20px)', style: { transform: 'translate(40px, 20px)' } },
    { label: 'rotate(45deg)', style: { transform: 'rotate(45deg)' } },
    { label: 'scaleX(1.5)', style: { transform: 'scaleX(1.5)' } },
    { label: 'scaleY(1.5)', style: { transform: 'scaleY(1.5)' } },
    { label: 'scale(1.5)', style: { transform: 'scale(1.5)' } },
    { label: 'skewX(20deg)', style: { transform: 'skewX(20deg)' } },
    { label: 'skewY(20deg)', style: { transform: 'skewY(20deg)' } },
    { label: 'matrix(1, 0.5, -0.5, 1, 30, 20)', style: { transform: 'matrix(1, 0.5, -0.5, 1, 30, 20)' } },
  ];

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS 2D Transform Examples</h2>

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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {transforms.map((item, i) => (
          <div key={i} style={{ textAlign: 'center', margin: '10px' }}>
            <div style={{ ...boxBase, ...item.style }}>{i + 1}</div>
            <div style={{ fontSize: '13px', marginTop: '5px' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSTransform2D;
