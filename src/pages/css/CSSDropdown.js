// src/pages/fundamentals/CSSDropdown.js
import React from 'react';

const CSSDropdown = () => {
  const code = `
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  border-radius: 6px;
  z-index: 1;
}

.dropdown-content a {
  color: #333;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
`.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Dropdown</h2>

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
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-btn {
          background-color: #007bff;
          color: white;
          padding: 10px 16px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #ffffff;
          min-width: 160px;
          box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
          border-radius: 6px;
          z-index: 1;
        }

        .dropdown-content a {
          color: #333;
          padding: 10px 14px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>

      <div className="dropdown">
        <button className="dropdown-btn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
    </div>
  );
};

export default CSSDropdown;
