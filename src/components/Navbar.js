// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css'; // Custom styling

const languages = [
  { name: 'HTML', path: '/html' },
  { name: 'CSS', path: '/css' },
  { name: 'JavaScript', path: '/javascript' },
  { name: 'C', path: '/c' },
  { name: 'Fundamentals', path: '/Fundamentals' },
  { name: 'MS Office', path: '/msword' },
  { name: 'Course', path: '/course' },
];

const htmlChapters = [
  { name: 'HTML Introduction', path: '/html/HTMLIntroduction' },
  { name: 'HTML Tags', path: '/html/TagExample' },
  { name: 'HTML Font', path: '/html/FontSizeTag' },
  { name: 'HTML Highlight Tags', path: '/html/HighlightTags' },
  { name: 'HTML Sub & Sup', path: '/html/SubSupTags' },
  { name: 'HTML Insert/Delete', path: '/html/InsertDeleteTags' },
  { name: 'Background Color', path: '/html/BackgroundColorTag' },
  { name: 'Hex Color', path: '/html/HexadecimalColors' },
  { name: 'Marquee', path: '/html/ScrollText' },
  { name: 'HTML Lists', path: '/html/HtmlListsExample' },
  { name: 'Nested List', path: '/html/NestedList' },
  { name: 'HTML Table', path: '/html/HtmlTableIntro' },
  { name: 'Marksheet Table', path: '/html/MarksheetTable' },
  { name: 'Font Properties', path: '/html/FontProperties' },
  { name: 'Insert Image', path: '/html/ImageInsert' },
  { name: 'Media Tag', path: '/html/MediaTag' },
  { name: 'Form Tag', path: '/html/FormDemo' },
  { name: 'Data Entry Form', path: '/html/DataEntryForm' },
  { name: 'Registration Form', path: '/html/RegistrationForm' },
  { name: 'Link Tag', path: '/html/LinkTag' },
  { name: 'Favicon Tag', path: '/html/FaviconTag' },
];

const cChapters = [
  // Intro & Basics
  { name: 'C Introduction', path: '/c/CIntro' },
  { name: 'C Features', path: '/c/CFeatures' },
  { name: 'C Basics', path: '/c/CBasics' },
  { name: 'C Comments', path: '/c/CComments' },
  { name: 'C Shortcut Keys', path: '/c/CShortcutKeys' },

  // Variables & Data Types
  { name: 'C Identifiers', path: '/c/CIdentifiers' },
  { name: 'C Variables', path: '/c/CVariables' },
  { name: 'C Variable Types', path: '/c/VariableTypes' },
  { name: 'C Datatypes', path: '/c/Datatypes' },
  { name: 'C Char', path: '/c/Char' },
  { name: 'C Double', path: '/c/Double' },
  { name: 'C Int, Float', path: '/c/CSampleIntFloat' },

  // Constants & Storage
  { name: 'C Const', path: '/c/Const' },
  { name: 'C Auto Variable', path: '/c/AutoVariable' },
  { name: 'C Extern', path: '/c/Extern' },
  { name: 'C Extern Variable', path: '/c/ExternVariable' },

  // Operators
  { name: 'C Operators', path: '/c/COperators' },
  { name: 'C Assignment', path: '/c/Assignment' },
  { name: 'C Increment & Decrement', path: '/c/IncrementDecrement' },
  { name: 'C Logical', path: '/c/Logical' },
  { name: 'C Ternary', path: '/c/Ternary' },
  { name: 'C Misc Operators', path: '/c/MiscOperators' },
  { name: 'C Bitwise', path: '/c/Bitwise' },
  { name: 'C Left Shift', path: '/c/LeftShift' },
  { name: 'C Right Shift', path: '/c/RightShift' },
  { name: 'C Unary', path: '/c/Unary' },

  // Keywords & Tokens
  { name: 'C Keywords', path: '/c/CKeywords' },
  { name: 'C ASCII', path: '/c/ASCII' },

  // Control Statements
  { name: 'C Control Statement', path: '/c/ControlStatementIntro' },
  { name: 'C If Statement', path: '/c/IfStatement' },
  { name: 'C If Else Statement', path: '/c/IfElseStatement' },
  { name: 'C If Else If Ladder', path: '/c/IfElseIfLadder' },
  { name: 'C Nested If', path: '/c/NestedIf' },
  { name: 'C Else', path: '/c/Else' },
  { name: 'C Switch', path: '/c/SwitchC' },
  { name: 'C Break', path: '/c/Break' },
  { name: 'C Continue', path: '/c/Continue' },
  { name: 'C Goto Statement', path: '/c/GotoStatement' },

  // Loops
  { name: 'C Loop Intro', path: '/c/LoopIntro' },
  { name: 'C Loop Types', path: '/c/LoopTypes' },
  { name: 'C Do While', path: '/c/Do' },

  // Arrays
  { name: 'C Array Intro', path: '/c/ArrayIntro' },
  { name: 'C One D Array', path: '/c/OneDArray' },
  { name: 'C Two D Array', path: '/c/TwoDArray' },
  { name: 'C Multi D Array', path: '/c/MultiDArray' },

  // Pointers
  { name: 'C Pointer Intro', path: '/c/PointerIntro' },
  { name: 'C Pointer Demo', path: '/c/PointerDemo' },

  // Structures & Enums
  { name: 'C Structure', path: '/c/StructureC' },
  { name: 'C Enum', path: '/c/Enum' },
  { name: 'C Enum Datatype', path: '/c/EnumDataType' },

  // Programs (Practice)
  { name: 'C Add and Mul', path: '/c/AddAndMul' },
  { name: 'C Sub and Div', path: '/c/SubAndDiv' },
  { name: 'C EB-Bill', path: '/c/EBBill' },
  { name: 'C Swap', path: '/c/SwapC' },

  // Misc
  { name: 'C Format Specifiers', path: '/c/CFormatSpecifiers' },
  { name: 'C Boolean', path: '/c/Boolean' },
  { name: 'C Default', path: '/c/Default' },
];


const cssChapters = [
  { name: 'CSS Introduction', path: '/css/CSSIntro' },
  { name: 'CSS Link Tag', path: '/css/CSSLinkTag' },
  { name: 'Border', path: '/css/Border' },
  { name: 'Text Properties', path: '/css/TextProperties' },
  { name: 'Font Style', path: '/css/FontStyle' },
  { name: 'Background Color', path: '/css/Background' },
  { name: 'Margin', path: '/css/Margin' },
  { name: 'BackGround Properties', path: '/css/BackgroundProperties' },
  { name: 'Padding Properties', path: '/css/Padding' },
  { name: 'Display Properties', path: '/css/Display' },
  { name: 'CSS Selector', path: '/css/Selector' },
  { name: 'CSS Flex Box', path: '/css/CSSFlexBox' },
  { name: 'CSS Float', path: '/css/CSSFloat' },
  { name: 'CSS Hover', path: '/css/CSSHover' },
  { name: 'CSS Transition', path: '/css/CSSTransition' },
  { name: 'CSS Flex Container', path: '/css/CSSFlexContainer' },
  { name: 'CSS Flex Wrap', path: '/css/CSSFlexWrap' },
  { name: 'CSS Justify Content', path: '/css/CSSJustifyContent' },
  { name: 'CSS Align Items', path: '/css/CSSAlignItems' },
  { name: 'CSS Align Content', path: '/css/CSSAlignContent' },
  { name: 'CSS Grid', path: '/css/CSSGrid' },
  { name: 'CSS Transform 2D', path: '/css/CSSTransform2D' },
  { name: 'CSS Transform 3D', path: '/css/CSSTransform3D' },
  { name: 'CSS Combinators', path: '/css/CSSCombinators' },
  { name: 'CSS Animation', path: '/css/CSSAnimation' },
  { name: 'CSS Animation Button', path: '/css/AnimatedButton' },
  { name: 'CSS Button Designs', path: '/css/ButtonDesigns' },
  { name: 'CSS Animation Fill Mode', path: '/css/AnimationFillMode' },
  { name: 'CSS Image Button', path: '/css/ImageButton' },
  { name: 'CSS Dropdown', path: '/css/CSSDropdown' },
  { name: 'CSS Image Dropdown', path: '/css/ImageDropdown' },
  { name: 'CSS Linear Gradients', path: '/css/CSSLinearGradients' },
];

const msofficeChapters = [
  { name: 'MS Word Introduction', path: '/msword/mswordintro' },
  { name: 'Shortcut Key', path: '/msword/Shortcutkey' },
  { name: 'Formula & Alignment', path: '/msword/Formula' },
  { name: 'Bio Data Practice', path: '/msword/Practice' },
  { name: 'Marksheet', path: '/msword/Marksheet' },
  { name: 'Date Of Birth Calculation', path: '/msword/DateOfBirth' },
  { name: 'Ribbon', path: '/msword/Ribbon' },
  { name: 'VLookup', path: '/msword/VLookup' },
  { name: 'HLookup', path: '/msword/HLookup' },
  { name: 'Flash Fill', path: '/msword/FlashFill' },
  { name: 'Conditional Formatting', path: '/msword/ConditionalFormating' },
  { name: 'Sum Series', path: '/msword/SumSeries' },
  { name: 'Charts', path: '/msword/ExcelChartPivot' },
];

const fundamentalsChapters = [
  { name: 'Introduction', path: '/fundamentals/intro' },
  { name: 'Generation', path: '/fundamentals/generation' },
  { name: 'Devices', path: '/fundamentals/Devices' },
  { name: 'Types of Memory', path: '/fundamentals/Memory' },
  { name: 'Hardware and Software', path: '/fundamentals/HardwareSoftware' },
  { name: 'Programming Languages', path: '/fundamentals/ProgrammingLanguages' },
  { name: 'Bit and Byte Conversion', path: '/fundamentals/BitAndComputer' },
];

const Navbar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    const matched = languages.find((lang) => location.pathname.startsWith(lang.path));
    if (matched) {
      setSelectedLang(matched.name);
    }
  }, [location.pathname]);

  const handleLangClick = (lang) => {
    setSelectedLang(lang.name);
    setSidebarOpen(true);
  };

  const isActiveLang = (lang) => selectedLang === lang.name;
const renderChapters = () => {
  const chapters = selectedLang === 'HTML' ? htmlChapters :
                   selectedLang === 'CSS' ? cssChapters :
                  selectedLang === 'Fundamentals' ? fundamentalsChapters:
                  selectedLang === 'MS Office' ? msofficeChapters:
                   selectedLang === 'C' ? cChapters : [];
  return (
    <ul style={{ paddingLeft: '1rem' }}>
      {chapters.map((chapter) => (
        <li key={chapter.name}>
          <Link
            to={chapter.path}
            className={location.pathname === chapter.path ? 'active' : ''}
            onClick={() => setSidebarOpen(false)}
          >
            {chapter.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};


  return (
    <nav className="w3-navbar-wrapper">
      <button className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      <div className="w3-navbar-scroll">
        {languages.map((lang) => (
          <Link
            key={lang.name}
            className={`w3-nav-item ${isActiveLang(lang) ? 'active' : ''}`}
            to={lang.path}
            onClick={() => handleLangClick(lang)}
          >
            {lang.name}
          </Link>
        ))}
      </div>
      <div className={`w3-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => { setSidebarOpen(false); setSelectedLang(null); }}>×</button>
        {renderChapters()}
      </div>
    </nav>
  );
};

export default Navbar;
