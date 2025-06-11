// src/pages/fundamentals/FundamentalsLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import CSidebar from '../../components/CSidebar';
import '../../css/FundamentalsLayout.css';

const CSSLayout = () => {
  return (
    <div className="layout-container">
      <CSidebar />
      <div className="main-content">
        
        <Outlet />
      </div>
    </div>
  );
};

export default CLayout;

