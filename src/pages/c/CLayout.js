import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AmazonAdBox from '../../components/AmazonAdBox';
import '../../css/FundamentalsLayout.css';

const CLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* Toggle Button for Small Screens */}
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰ Ads
      </button>

      {/* Left Amazon Ad Box (collapsible) */}
      <div className={`sidebar amazon-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <AmazonAdBox />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>

      {/* Right Amazon Ad Box (hidden on small screens) */}
      <div className="ad-section hide-on-mobile">
        <AmazonAdBox />
      </div>
    </div>
  );
};

export default CLayout;
