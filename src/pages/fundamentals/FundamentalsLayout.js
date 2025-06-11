import React from 'react';
import { Outlet } from 'react-router-dom';
import FundamentalsSidebar from '../../components/FundamentalsSidebar';
import '../../css/FundamentalsLayout.css';

const FundamentalsLayout = () => {
  return (
    <div className="layout-container">
      {/* Left Sidebar */}
      <FundamentalsSidebar />

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>

      {/* Right Advertisement */}
 <div className="ad-section">
  <div className="ad-box">
    <p><strong>🔥 Naruto Special</strong></p>
    <a
      href="https://en.wikipedia.org/wiki/Naruto"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
        alt="Naruto Cover"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '10px' }}>Watch Naruto – Legendary Ninja Journey!</p>
    </a>
  </div>
</div>

    </div>
  );
};

export default FundamentalsLayout;
