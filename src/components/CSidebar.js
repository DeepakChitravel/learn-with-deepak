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
      <NavLink to="/c/Datatypes" activeclassname="active"> C Datatypes</NavLink>
      <NavLink to="/c/CShortcutKeys" activeclassname="active"> C Shorcut Keys</NavLink>
      <NavLink to="/c/EnumDataType" activeclassname="active"> C Enum Datatype</NavLink>
      <NavLink to="/c/CComments" activeclassname="active"> C Comments</NavLink>
      <NavLink to="/c/CFormatSpecifiers" activeclassname="active"> C Format Specifiers</NavLink>
      <NavLink to="/c/CFeatures" activeclassname="active"> C Features</NavLink>
      <NavLink to="/c/CKeywords" activeclassname="active"> C Keywords</NavLink>
      <NavLink to="/c/CSampleIntFloat" activeclassname="active"> C Int,Float</NavLink>
      <NavLink to="/c/CSubMulDiv" activeclassname="active"> C Sub Mul Div</NavLink>
      <NavLink to="/c/CVariables" activeclassname="active"> C Variables</NavLink>
      <NavLink to="/c/CBasics" activeclassname="active"> C Basics</NavLink>
      <NavLink to="/c/VariableTypes" activeclassname="active"> C VariableTypes</NavLink>
      
      </nav>
    </div>
  );
};

export default CSidebar;

