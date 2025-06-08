// src/components/FundamentalsSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const HTMLSidebar = () => {
  return (
    <div className="sidebar">
      <h5>📘 HTML</h5>
   
      <NavLink to="/html/introduction" activeclassname="active">Introduction</NavLink>
      <NavLink to="/html/TagExample" activeclassname="active">HTML Tags</NavLink>
      <NavLink to="/html/FontSizeTag" activeclassname="active">Font Size</NavLink>
      <NavLink to="/html/BasicTags" activeclassname="active">Basic Tags</NavLink>
      <NavLink to="/html/HighlightTags" activeclassname="active">Hightlight Tags</NavLink>
      <NavLink to="/html/SubSupTags" activeclassname="active">Subscript and Superscript Tags</NavLink>
      <NavLink to="/html/InsertDeleteTags" activeclassname="active">Insert and Delete Tags</NavLink>
      <NavLink to="/html/BackgroundColorTag" activeclassname="active">Back Ground Color</NavLink>
      <NavLink to="/html/HexadecimalColors" activeclassname="active">Hexa Decimal Color</NavLink>
      <NavLink to="/html/ScrollText" activeclassname="active">Marquee</NavLink>
      <NavLink to="/html/HtmlListsExample" activeclassname="active">Html List</NavLink>
      <NavLink to="/html/NestedList" activeclassname="active">Nested List</NavLink>
      <NavLink to="/html/HtmlTableIntro" activeclassname="active">HTML Table</NavLink>
      <NavLink to="/html/MarksheetTable" activeclassname="active">MarkSheet Table</NavLink>
      <NavLink to="/html/FontProperties" activeclassname="active">Font Properties</NavLink>
      <NavLink to="/html/ImageInsert" activeclassname="active">Inserting Image</NavLink>
      <NavLink to="/html/MediaTag" activeclassname="active">Media Tag</NavLink>





   
      {/* Add more links as needed */}
    </div>
  );
};

export default HTMLSidebar;
