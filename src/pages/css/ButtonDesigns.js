// src/pages/fundamentals/ButtonDesigns.js
import React from 'react';

const ButtonDesigns = () => {
  const code = `
/* Common button styles */
.button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 8px;
}

/* 1. Primary */
.primary {
  background-color: #007bff;
  color: white;
  border: none;
}

/* 2. Outline */
.outline {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

/* 3. Rounded */
.rounded {
  border-radius: 50px;
  background-color: #28a745;
  color: white;
  border: none;
}

/* 4. Shadow */
.shadow {
  background-color: #6f42c1;
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 5. Gradient */
.gradient {
  background: linear-gradient(45deg, #ff6b6b, #f06595);
  color: white;
  border: none;
}

/* 6. Glow */
.glow {
  background-color: #17a2b8;
  color: white;
  border: none;
  box-shadow: 0 0 10px #17a2b8;
}

/* 7. Icon button */
.icon-btn {
  background-color: #343a40;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
}
`.trim();

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>Types of Button Designs</h2>

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

      <style>
        {`
          .button {
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 8px;
          }
          .primary {
            background-color: #007bff;
            color: white;
            border: none;
          }
          .outline {
            background-color: transparent;
            color: #007bff;
            border: 2px solid #007bff;
          }
          .rounded {
            border-radius: 50px;
            background-color: #28a745;
            color: white;
            border: none;
          }
          .shadow {
            background-color: #6f42c1;
            color: white;
            border: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
          .gradient {
            background: linear-gradient(45deg, #ff6b6b, #f06595);
            color: white;
            border: none;
          }
          .glow {
            background-color: #17a2b8;
            color: white;
            border: none;
            box-shadow: 0 0 10px #17a2b8;
          }
          .icon-btn {
            background-color: #343a40;
            color: white;
            border: none;
            padding: 10px 16px;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
        `}
      </style>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <button className="button primary">Primary</button>
        <button className="button outline">Outline</button>
        <button className="button rounded">Rounded</button>
        <button className="button shadow">Shadow</button>
        <button className="button gradient">Gradient</button>
        <button className="button glow">Glow</button>
        <button className="button icon-btn">
          <span>🔍</span> Search
        </button>
      </div>
    </div>
  );
};

export default ButtonDesigns;
