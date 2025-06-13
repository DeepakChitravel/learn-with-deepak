import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const MSOfficeSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">MS-Office Tutorial</h5>
      <nav className="sidebar-nav">
      <NavLink to="/msword/mswordintro" activeclassname="active"> MS Word Intorduction</NavLink>
      <NavLink to="/msword/Shortcutkey" activeclassname="active">Shortcut Key</NavLink>
      <NavLink to="/msword/Formula" activeclassname="active">Formula & Alignment</NavLink>
      <NavLink to="/msword/Practice" activeclassname="active"> Bio Data Practice</NavLink>
      <NavLink to="/msword/Marksheet" activeclassname="active"> Marksheet </NavLink>
      <NavLink to="/msword/DateOfBirth" activeclassname="active"> Date Of Birth Calculation </NavLink>
      <NavLink to="/msword/Ribbon" activeclassname="active"> Ribbon </NavLink>
      <NavLink to="/msword/VLookup" activeclassname="active"> VLookUP </NavLink>
      <NavLink to="/msword/HLookup" activeclassname="active"> HLookUP </NavLink>
      <NavLink to="/msword/FlashFill" activeclassname="active"> Flash Fill </NavLink>
      <NavLink to="/msword/ConditionalFormating" activeclassname="active"> Conditional Formating </NavLink>
      <NavLink to="/msword/SumSeries" activeclassname="active">Sum Series </NavLink>
      <NavLink to="/msword/ExcelChartPivot" activeclassname="active">Charts  </NavLink>
      </nav>
    </div>
  );
};

export default MSOfficeSidebar;

