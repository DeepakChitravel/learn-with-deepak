// src/components/CSSSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css'; // Reuse existing sidebar styles

const CSidebar = () => {
  return (
    <div className="sidebar">
      <h5>🎨 CSS Topics</h5>
      <NavLink to="/c/CIntro" activeclassname="active">C Introduction</NavLink> 
   
    </div>
  );
};

export default CSidebar;
