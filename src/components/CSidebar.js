import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  const links = [
    { path: '/c/CIntro', name: 'C Introduction' },
    { path: '/c/CFeatures', name: 'C Features' },
    { path: '/c/CKeywords', name: 'C Keywords' },
    { path: '/c/CIdentifiers', name: 'C Identifiers' },
    { path: '/c/CBasics', name: 'C Basics' },
    { path: '/c/CComments', name: 'C Comments' },
    { path: '/c/CFormatSpecifiers', name: 'C Format Specifiers' },
    { path: '/c/CShortcutKeys', name: 'C Shortcut Keys' },
    { path: '/c/ASCII', name: 'C ASCII' },
    { path: '/c/Datatypes', name: 'C Datatypes' },
    { path: '/c/Char', name: 'C Char' },
    { path: '/c/Double', name: 'C Double' },
    { path: '/c/Const', name: 'C Const' },
    { path: '/c/Enum', name: 'C Enum' },
    { path: '/c/EnumDataType', name: 'C Enum Datatype' },
    { path: '/c/Extern', name: 'C Extern' },
    { path: '/c/CVariables', name: 'C Variables' },
    { path: '/c/VariableTypes', name: 'C Variable Types' },
    { path: '/c/CSampleIntFloat', name: 'C Int, Float' },
    { path: '/c/Arithmetic', name: 'C Arithmetic' },
    { path: '/c/Assignment', name: 'C Assignment' },
    { path: '/c/Bitwise', name: 'C Bitwise' },
    { path: '/c/Logical', name: 'C Logical' },
    { path: '/c/Ternary', name: 'C Ternary' },
    { path: '/c/Unary', name: 'C Unary' },
    { path: '/c/IncrementDecrement', name: 'C Increment & Decrement' },
    { path: '/c/IfElse', name: 'C If Else' },
    { path: '/c/Else', name: 'C Else' },
    { path: '/c/Default', name: 'C Default' },
    { path: '/c/Do', name: 'C Do' },
    { path: '/c/Break', name: 'C Break' },
    { path: '/c/Continue', name: 'C Continue' },
    { path: '/c/SwapC', name: 'C Swap' },
    { path: '/c/EBBill', name: 'C EB-Bill' },
    { path: '/c/AddAndMul', name: 'C Add and Mul' },
    { path: '/c/SubAndDiv', name: 'C Sub and Div' },
    { path: '/c/Boolean', name: 'C Boolean' },
    { path: '/c/AutoVariable', name: 'C Auto Variable' },
    { path: '/c/ExternVariable', name: 'C Extern Variable' },
    { path: '/c/COperators', name: 'C Operators' },
    { path: '/c/MiscOperators', name: 'C Misc Operators' },
    { path: '/c/ControlStatementIntro', name: 'C Control Statement' },
    { path: '/c/IfStatement', name: 'C If Statement' },
    { path: '/c/IfElseStatement', name: 'C If Else Statement' },
    { path: '/c/IfElseIfLadder', name: 'C If Else If Ladder' },
    { path: '/c/NestedIf', name: 'C NestedIf' },
    
  ];

  return (
    <div className="sidebar">
      <h5 className="sidebar-title">C Tutorial</h5>
      <nav className="sidebar-nav">
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} activeclassname="active">
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default CSidebar;
