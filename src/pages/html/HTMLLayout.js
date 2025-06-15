// src/pages/fundamentals/HTMLLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../css/FundamentalsLayout.css';

const HTMLLayout = () => {
  return (
    <div className="layout-container" style={{ display: 'flex' }}>
      
      {/* Left Advertisement */}
      <div className="ad-section" style={{ width: '15%', padding: '10px', background: '#f9f9f9' }}>
        <div className="ad-box">
          <p><strong>🔥 Smartwatch Deal</strong></p>
          <a
            href="https://www.amazon.in/dp/B09Y1FJ7H8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://m.media-amazon.com/images/I/71qU9mvL0kL._SX679_.jpg"
              alt="Smartwatch"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px' }}>boAt Smartwatch - ₹1,499</p>
            <ul style={{ fontSize: '0.9rem', paddingLeft: '16px' }}>
              <li>1.52″ AMOLED Display</li>
              <li>Bluetooth Calling</li>
              <li>Multiple Watch Faces</li>
            </ul>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>

      {/* Right Advertisement */}
      <div className="ad-section" style={{ width: '15%', padding: '10px', background: '#f9f9f9' }}>
        <div className="ad-box">
          <p><strong>🎧 Headphones Offer</strong></p>
          <a
            href="https://www.amazon.in/dp/B0863TXGM3"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://m.media-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
              alt="Sony Headphones"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px' }}>Sony WH-CH520 - ₹3,989</p>
            <ul style={{ fontSize: '0.9rem', paddingLeft: '16px' }}>
              <li>35 Hrs Battery</li>
              <li>Bluetooth 5.0</li>
              <li>On-Ear Comfort</li>
            </ul>
          </a>
        </div>
      </div>

    </div>
  );
};

export default HTMLLayout;
