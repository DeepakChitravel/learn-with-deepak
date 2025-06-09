// src/components/CSSSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css'; // Reuse existing sidebar styles

const CSSSidebar = () => {
  return (
    <div className="sidebar">
      <h5>🎨 CSS Topics</h5>
      <NavLink to="/css/CSSIntro" activeclassname="active">CSS Introduction</NavLink>
      <NavLink to="/css/CSSLinkTag" activeclassname="active">CSS Link Tag</NavLink>
   
    </div>
  );
};

export default CSSSidebar;
