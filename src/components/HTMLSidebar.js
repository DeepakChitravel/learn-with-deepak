// src/components/FundamentalsSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const HTMLSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">HTML Tutorial</h5>
      <nav className="sidebar-nav">
        <NavLink to="/html/introduction" className={({ isActive }) => isActive ? 'active' : ''}>Introduction</NavLink>
        <NavLink to="/html/TagExample" className={({ isActive }) => isActive ? 'active' : ''}>HTML Tags</NavLink>
        <NavLink to="/html/FontSizeTag" className={({ isActive }) => isActive ? 'active' : ''}>HTML Font</NavLink>
        <NavLink to="/html/BasicTags" className={({ isActive }) => isActive ? 'active' : ''}>HTML Tags</NavLink>
        <NavLink to="/html/HighlightTags" className={({ isActive }) => isActive ? 'active' : ''}>HTML Highlight Tags </NavLink>
        <NavLink to="/html/SubSupTags" className={({ isActive }) => isActive ? 'active' : ''}>HTML Subscript and Superscript Tags</NavLink>
        <NavLink to="/html/InsertDeleteTags" className={({ isActive }) => isActive ? 'active' : ''}>HTMl Insert and Delete Tags</NavLink>
        <NavLink to="/html/BackgroundColorTag" className={({ isActive }) => isActive ? 'active' : ''}>HTML Background Color</NavLink>
        <NavLink to="/html/HexadecimalColors" className={({ isActive }) => isActive ? 'active' : ''}>HTML Hexadecimal Color</NavLink>
        <NavLink to="/html/ScrollText" className={({ isActive }) => isActive ? 'active' : ''}>HTML Marquee</NavLink>
        <NavLink to="/html/HtmlListsExample" className={({ isActive }) => isActive ? 'active' : ''}>HTML List</NavLink>
        <NavLink to="/html/NestedList" className={({ isActive }) => isActive ? 'active' : ''}>HTML Nested List</NavLink>
        <NavLink to="/html/HtmlTableIntro" className={({ isActive }) => isActive ? 'active' : ''}>HTML Table</NavLink>
        <NavLink to="/html/MarksheetTable" className={({ isActive }) => isActive ? 'active' : ''}>HTML Marksheet Table</NavLink>
        <NavLink to="/html/FontProperties" className={({ isActive }) => isActive ? 'active' : ''}>HTML Font Properties</NavLink>
        <NavLink to="/html/ImageInsert" className={({ isActive }) => isActive ? 'active' : ''}>HTML Inserting Image</NavLink>
        <NavLink to="/html/MediaTag" className={({ isActive }) => isActive ? 'active' : ''}>HTML Media Tag</NavLink>
        <NavLink to="/html/FormDemo" className={({ isActive }) => isActive ? 'active' : ''}>HTML Form Tag</NavLink>
        <NavLink to="/html/DataEntryForm" className={({ isActive }) => isActive ? 'active' : ''}>HTML Data Entry Form</NavLink>
        <NavLink to="/html/RegistrationForm" className={({ isActive }) => isActive ? 'active' : ''}>HTML Registration Form</NavLink>
        <NavLink to="/html/LinkTag" className={({ isActive }) => isActive ? 'active' : ''}>HTML Link Tag</NavLink>
        <NavLink to="/html/FaviconTag" className={({ isActive }) => isActive ? 'active' : ''}>HTML Favicon Tag</NavLink>
      </nav>
    </div>
  );
};

export default HTMLSidebar;
