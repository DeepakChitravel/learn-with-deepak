import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  const links = [
    { path: '/c/AddAndMul', name: 'C Add and Mul' },
    { path: '/c/Arithmetic', name: 'C Arithmetic' },
    { path: '/c/ArrayIntro', name: 'C Array Intro' },
    { path: '/c/ASCII', name: 'C ASCII' },
    { path: '/c/Assignment', name: 'C Assignment' },
    { path: '/c/AutoVariable', name: 'C Auto Variable' },
    { path: '/c/Bitwise', name: 'C Bitwise' },
    { path: '/c/Boolean', name: 'C Boolean' },
    { path: '/c/Break', name: 'C Break' },
    { path: '/c/CComments', name: 'C Comments' },
    { path: '/c/CBasics', name: 'C Basics' },
    { path: '/c/CFeatures', name: 'C Features' },
    { path: '/c/Char', name: 'C Char' },
    { path: '/c/CFormatSpecifiers', name: 'C Format Specifiers' },
    { path: '/c/CIdentifiers', name: 'C Identifiers' },
    { path: '/c/CIntro', name: 'C Introduction' },
    { path: '/c/CKeywords', name: 'C Keywords' },
    { path: '/c/Const', name: 'C Const' },
    { path: '/c/Continue', name: 'C Continue' },
    { path: '/c/ControlStatementIntro', name: 'C Control Statement' },
    { path: '/c/COperators', name: 'C Operators' },
    { path: '/c/CSampleIntFloat', name: 'C Int, Float' },
    { path: '/c/CShortcutKeys', name: 'C Shortcut Keys' },
    { path: '/c/CVariables', name: 'C Variables' },
    { path: '/c/Datatypes', name: 'C Datatypes' },
    { path: '/c/Default', name: 'C Default' },
    { path: '/c/Do', name: 'C Do' },
    { path: '/c/Double', name: 'C Double' },
    { path: '/c/EBBill', name: 'C EB-Bill' },
    { path: '/c/Else', name: 'C Else' },
    { path: '/c/Enum', name: 'C Enum' },
    { path: '/c/EnumDataType', name: 'C Enum Datatype' },
    { path: '/c/Extern', name: 'C Extern' },
    { path: '/c/ExternVariable', name: 'C Extern Variable' },
    { path: '/c/GotoStatement', name: 'C Goto Statement' },
    { path: '/c/IfElseIfLadder', name: 'C If Else If Ladder' },
    { path: '/c/IfElseStatement', name: 'C If Else Statement' },
    { path: '/c/IfStatement', name: 'C If Statement' },
    { path: '/c/IncrementDecrement', name: 'C Increment & Decrement' },
    { path: '/c/LeftShift', name: 'C Left Shift' },
    { path: '/c/Logical', name: 'C Logical' },
    { path: '/c/LoopIntro', name: 'C Loop Intro' },
    { path: '/c/LoopTypes', name: 'C Loop Types' },
    { path: '/c/MiscOperators', name: 'C Misc Operators' },
    { path: '/c/MultiDArray', name: 'C Multi DArray' },
    { path: '/c/NestedIf', name: 'C NestedIf' },
    { path: '/c/OneDArray', name: 'C One DArray' },
    { path: '/c/PointerDemo', name: 'C Pointer Demo' },
    { path: '/c/PointerIntro', name: 'C Pointer Intro' },
    { path: '/c/RightShift', name: 'C Right Shift' },
    { path: '/c/StructureC', name: 'C Structure ' },
    { path: '/c/SubAndDiv', name: 'C Sub and Div' },
    { path: '/c/SwitchC', name: 'C Switch' },
    { path: '/c/SwapC', name: 'C Swap' },
    { path: '/c/Ternary', name: 'C Ternary' },
    { path: '/c/TwoDArray', name: 'C Two DArray' },
    { path: '/c/Unary', name: 'C Unary' },
    { path: '/c/VariableTypes', name: 'C Variable Types' }
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
