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
      <NavLink to="/css/Border" activeclassname="active">Border </NavLink>
      <NavLink to="/css/TextProperties" activeclassname="active">Text Properties </NavLink>
      <NavLink to="/css/FontStyle" activeclassname="active">Font Style </NavLink>
      <NavLink to="/css/Background" activeclassname="active">Background Color </NavLink>
      <NavLink to="/css/Margin" activeclassname="active">Margin </NavLink>
      <NavLink to="/css/BackgroundProperties" activeclassname="active">BackGround Properties </NavLink>
      <NavLink to="/css/Padding" activeclassname="active">Padding Properties </NavLink>
      <NavLink to="/css/Display" activeclassname="active">Display Properties </NavLink>
      <NavLink to="/css/Selector" activeclassname="active">CSS Selector </NavLink>
   
    </div>
  );
};

export default CSSSidebar;
