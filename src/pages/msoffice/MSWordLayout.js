// src/pages/msword/MSWordLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import MSWordSidebar from '../../components/MSWordSidebar';
import '../../css/FundamentalsLayout.css'; // Reuse same layout styling

const MSWordLayout = () => {
  return (
    <div className="layout-container">
      <MSWordSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MSWordLayout;
