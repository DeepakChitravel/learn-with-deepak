// src/components/FundamentalsSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const FundamentalsSidebar = () => {
  return (
    <div className="sidebar">
      <h5>📘 Fundamentals</h5>
      <NavLink to="/fundamentals/intro" activeclassname="active">Introduction</NavLink>
      <NavLink to="/fundamentals/generation" activeclassname="active">Generation</NavLink>
      <NavLink to="/fundamentals/Devices" activeclassname="active">Devices</NavLink>
      <NavLink to="/fundamentals/Memory" activeclassname="active">Types of Memory</NavLink>
      <NavLink to="/fundamentals/HardwareSoftware" activeclassname="active">Hardware and Software</NavLink>
      <NavLink to="/fundamentals/ProgrammingLanguages" activeclassname="active">Programming Languages</NavLink>
      <NavLink to="/fundamentals/BitAndComputer" activeclassname="active">Bit and Byte Conversion</NavLink>
      {/* Add more links as needed */}
    </div>
  );
};

export default FundamentalsSidebar;
