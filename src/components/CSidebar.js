import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">C Language Tutorial</h5>
      <nav className="sidebar-nav">

        {/* Basics */}
        <NavLink to="/c/CIntro" activeclassname="active">C Introduction</NavLink>
        <NavLink to="/c/CFeatures" activeclassname="active">C Features</NavLink>
        <NavLink to="/c/CKeywords" activeclassname="active">C Keywords</NavLink>
        <NavLink to="/c/CIdentifiers" activeclassname="active">C Identifiers</NavLink>
        <NavLink to="/c/CBasics" activeclassname="active">C Basics</NavLink>
        <NavLink to="/c/CComments" activeclassname="active">C Comments</NavLink>
        <NavLink to="/c/CFormatSpecifiers" activeclassname="active">C Format Specifiers</NavLink>
        <NavLink to="/c/CShortcutKeys" activeclassname="active">C Shortcut Keys</NavLink>
        <NavLink to="/c/ASCII" activeclassname="active">C ASCII</NavLink>

        {/* Data Types */}
        <NavLink to="/c/Datatypes" activeclassname="active">C Datatypes</NavLink>
        <NavLink to="/c/Char" activeclassname="active">C Char</NavLink>
        <NavLink to="/c/Double" activeclassname="active">C Double</NavLink>
        <NavLink to="/c/Const" activeclassname="active">C Const</NavLink>
        <NavLink to="/c/Enum" activeclassname="active">C Enum</NavLink>
        <NavLink to="/c/EnumDataType" activeclassname="active">C Enum Datatype</NavLink>
        <NavLink to="/c/Extern" activeclassname="active">C Extern</NavLink>

        {/* Variables */}
        <NavLink to="/c/CVariable" activeclassname="active">C Variable</NavLink>
        <NavLink to="/c/CVariables" activeclassname="active">C Variables</NavLink>
        <NavLink to="/c/VariableTypes" activeclassname="active">C Variable Types</NavLink>
        <NavLink to="/c/CSampleIntFloat" activeclassname="active">C Int, Float</NavLink>

        {/* Operators */}
        <NavLink to="/c/Arithmetic" activeclassname="active">C Arithmetic</NavLink>
        <NavLink to="/c/Assignment" activeclassname="active">C Assignment</NavLink>
        <NavLink to="/c/Bitwise" activeclassname="active">C Bitwise</NavLink>
        <NavLink to="/c/Logical" activeclassname="active">C Logical</NavLink>
        <NavLink to="/c/Ternary" activeclassname="active">C Ternary</NavLink>
        <NavLink to="/c/Unary" activeclassname="active">C Unary</NavLink>
        <NavLink to="/c/IncrementDecrement" activeclassname="active">C Increment & Decrement</NavLink>

        {/* Control Statements */}
        <NavLink to="/c/IfElse" activeclassname="active">C If Else</NavLink>
        <NavLink to="/c/Else" activeclassname="active">C Else</NavLink>
        <NavLink to="/c/Default" activeclassname="active">C Default</NavLink>
        <NavLink to="/c/Do" activeclassname="active">C Do</NavLink>
        <NavLink to="/c/Break" activeclassname="active">C Break</NavLink>
        <NavLink to="/c/Continue" activeclassname="active">C Continue</NavLink>

        {/* Practice Programs */}
        <NavLink to="/c/SwapC" activeclassname="active">C Swap</NavLink>
        <NavLink to="/c/EBBill" activeclassname="active">C EB-Bill</NavLink>
        <NavLink to="/c/AddAndMul" activeclassname="active">C Add and Mul</NavLink>
        <NavLink to="/c/SubAndDiv" activeclassname="active">C Sub and Div</NavLink>
        <NavLink to="/c/CSubMulDiv" activeclassname="active">C Sub Mul Div</NavLink>

      </nav>
    </div>
  );
};

export default CSidebar;
