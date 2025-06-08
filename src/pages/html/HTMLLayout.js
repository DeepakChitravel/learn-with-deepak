// src/pages/fundamentals/HTMLLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import HTMLSidebar from '../../components/HTMLSidebar';
import '../../css/FundamentalsLayout.css';

const HTMLLayout = () => {
  return (
    <div className="layout-container">
      {/* Sidebar navigation */}
      <HTMLSidebar />

      {/* Main content area where nested routes render */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLLayout;
