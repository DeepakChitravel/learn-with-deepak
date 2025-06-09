// src/pages/fundamentals/FundamentalsLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import CSSSidebar from '../../components/CSSSidebar';
import '../../css/FundamentalsLayout.css';

const CSSLayout = () => {
  return (
    <div className="layout-container">
      <CSSSidebar />
      <div className="main-content">
        
        <Outlet />
      </div>
    </div>
  );
};

export default CSSLayout;

