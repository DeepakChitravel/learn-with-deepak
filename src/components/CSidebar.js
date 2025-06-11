import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">HTML Tutorial</h5>
      <nav className="sidebar-nav">
      <NavLink to="/c/CIntro" activeclassname="active"> C Introduction</NavLink>
      <NavLink to="/c/SwapC" activeclassname="active"> C Swap</NavLink>
      
      </nav>
    </div>
  );
};

export default CSidebar;

