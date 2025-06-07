// src/pages/fundamentals/FundamentalsLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import FundamentalsSidebar from '../../components/FundamentalsSidebar';
import '../../css/FundamentalsLayout.css';

const FundamentalsLayout = () => {
  return (
    <div className="layout-container">
      <FundamentalsSidebar />
      <div className="main-content">
        <Outlet />
      </div>``
    </div>
  );
};

export default FundamentalsLayout;
