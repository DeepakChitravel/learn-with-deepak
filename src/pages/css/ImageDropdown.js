// src/pages/fundamentals/ImageDropdown.js
import React from 'react';

const ImageDropdown = () => {
  const code = `
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-img-btn {
  border: none;
  background: none;
  cursor: pointer;
}

.dropdown-img-btn img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #007bff;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 140px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  border-radius: 6px;
  z-index: 1;
  overflow: hidden;
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
      <h2>Dropdown with Image</h2>

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

        .dropdown-img-btn {
          border: none;
          background: none;
          cursor: pointer;
        }

        .dropdown-img-btn img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #007bff;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          background-color: #fff;
          min-width: 140px;
          box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
          border-radius: 6px;
          z-index: 1;
          overflow: hidden;
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
        <button className="dropdown-img-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
          />
        </button>
        <div className="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default ImageDropdown;
