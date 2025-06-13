import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSidebar = () => {
  const links = [
    // Intro & Basics
    { path: '/c/CIntro', name: 'C Introduction' },
    { path: '/c/CFeatures', name: 'C Features' },
    { path: '/c/CBasics', name: 'C Basics' },
    { path: '/c/CComments', name: 'C Comments' },
    { path: '/c/CShortcutKeys', name: 'C Shortcut Keys' },

    // Variables & Data Types
    { path: '/c/CIdentifiers', name: 'C Identifiers' },
    { path: '/c/CVariables', name: 'C Variables' },
    { path: '/c/VariableTypes', name: 'C Variable Types' },
    { path: '/c/Datatypes', name: 'C Datatypes' },
    { path: '/c/Char', name: 'C Char' },
    { path: '/c/Double', name: 'C Double' },
    { path: '/c/CSampleIntFloat', name: 'C Int, Float' },

    // Constants, Storage Classes
    { path: '/c/Const', name: 'C Const' },
    { path: '/c/AutoVariable', name: 'C Auto Variable' },
    { path: '/c/Extern', name: 'C Extern' },
    { path: '/c/ExternVariable', name: 'C Extern Variable' },

    // Operators
    { path: '/c/COperators', name: 'C Operators' },
    { path: '/c/Assignment', name: 'C Assignment' },
    { path: '/c/IncrementDecrement', name: 'C Increment & Decrement' },
    { path: '/c/Logical', name: 'C Logical' },
    { path: '/c/Ternary', name: 'C Ternary' },
    { path: '/c/MiscOperators', name: 'C Misc Operators' },
    { path: '/c/Bitwise', name: 'C Bitwise' },
    { path: '/c/LeftShift', name: 'C Left Shift' },
    { path: '/c/RightShift', name: 'C Right Shift' },

    // Keywords & Tokens
    { path: '/c/CKeywords', name: 'C Keywords' },
    { path: '/c/ASCII', name: 'C ASCII' },

    // Control Statements
    { path: '/c/ControlStatementIntro', name: 'C Control Statement' },
    { path: '/c/IfStatement', name: 'C If Statement' },
    { path: '/c/IfElseStatement', name: 'C If Else Statement' },
    { path: '/c/IfElseIfLadder', name: 'C If Else If Ladder' },
    { path: '/c/NestedIf', name: 'C Nested If' },
    { path: '/c/Else', name: 'C Else' },
    { path: '/c/SwitchC', name: 'C Switch' },
    { path: '/c/Break', name: 'C Break' },
    { path: '/c/Continue', name: 'C Continue' },
    { path: '/c/GotoStatement', name: 'C Goto Statement' },

    // Loops
    { path: '/c/LoopIntro', name: 'C Loop Intro' },
    { path: '/c/LoopTypes', name: 'C Loop Types' },
    { path: '/c/Do', name: 'C Do While' },

    // Arrays
    { path: '/c/ArrayIntro', name: 'C Array Intro' },
    { path: '/c/OneDArray', name: 'C One D Array' },
    { path: '/c/TwoDArray', name: 'C Two D Array' },
    { path: '/c/MultiDArray', name: 'C Multi D Array' },

    // Pointers
    { path: '/c/PointerIntro', name: 'C Pointer Intro' },
    { path: '/c/PointerDemo', name: 'C Pointer Demo' },

    // Structures & Enums
    { path: '/c/StructureC', name: 'C Structure' },
    { path: '/c/Enum', name: 'C Enum' },
    { path: '/c/EnumDataType', name: 'C Enum Datatype' },

    // Programs (Practice)
    { path: '/c/AddAndMul', name: 'C Add and Mul' },
    { path: '/c/SubAndDiv', name: 'C Sub and Div' },
    { path: '/c/EBBill', name: 'C EB-Bill' },
    { path: '/c/SwapC', name: 'C Swap' },

    // Format Specifiers
    { path: '/c/CFormatSpecifiers', name: 'C Format Specifiers' },
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
