import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const languages = [
  { name: 'HTML', path: '/html' },
  { name: 'CSS', path: '/css' },
  { name: 'JavaScript', path: '/javascript' },
  { name: 'Fundamentals of Computer', path: '/Fundamentals' },
  { name: 'MS Office', path: '/msword' },
  { name: 'Course', path: '/course' },
  
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w3-language-navbar">
      <ul className="w3-language-list">
        {languages.map((lang) => (
          <li key={lang.name} className={location.pathname === lang.path ? 'active' : ''}>
            <Link to={lang.path}>{lang.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
