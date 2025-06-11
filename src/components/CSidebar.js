import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">HTML Tutorial</h5>
      <nav className="sidebar-nav">
      <NavLink to="/c/CIntro" activeclassname="active"> C Introduction</NavLink>
      <NavLink to="/c/SwapC" activeclassname="active"> C Swap</NavLink>
      <NavLink to="/c/EBBill" activeclassname="active"> C EB-Bill</NavLink>
      <NavLink to="/c/CVariable" activeclassname="active"> C Variable</NavLink>
      <NavLink to="/c/AddAndMul" activeclassname="active"> C Add and Mul</NavLink>
      <NavLink to="/c/SubAndDiv" activeclassname="active"> C Sub and Div</NavLink>
      <NavLink to="/c/CIdentifiers" activeclassname="active"> C Identifiers</NavLink>
      <NavLink to="/c/ASCII" activeclassname="active"> C ASCII</NavLink>
      
      </nav>
    </div>
  );
};

export default CSidebar;

