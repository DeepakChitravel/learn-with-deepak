// src/pages/fundamentals/ImageButton.js
import React from 'react';

const ImageButton = () => {
  const code = `
.button-with-image {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.button-with-image img {
  width: 24px;
  height: 24px;
}

.button-with-image:hover {
  background-color: #0056b3;
}
`.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>Button with Image</h2>

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

      <style>{`
        .button-with-image {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .button-with-image img {
          width: 24px;
          height: 24px;
        }

        .button-with-image:hover {
          background-color: #0056b3;
        }
      `}</style>

      <button className="button-with-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
          alt="arrow icon"
        />
        Click Me
      </button>
    </div>
  );
};

export default ImageButton;
