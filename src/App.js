import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FundamentalsLayout from './pages/fundamentals/FundamentalsLayout';
import IntroPage from './pages/fundamentals/IntroPage';
import Generation from './pages/fundamentals/Generation';
import ApplicationCourse from './pages/course/ApplicationCourse';
import Devices from './pages/fundamentals/Devices';
import Memory from './pages/fundamentals/Memory';
import HardwareSoftware from './pages/fundamentals/HardwareSoftware';
import ProgrammingLanguages from './pages/fundamentals/ProgrammingLanguages';
import BitAndComputer from './pages/fundamentals/BitAndComputer';
import ShortcutKey from './pages/msoffice/ShortcutKey';
import MSOfficeLayout from './pages/msoffice/MSOfficeLayout';
import Formula from './pages/msoffice/Formula';
import Practice from './pages/msoffice/Practice';
import MSWordIntro from './pages/msoffice/MSWordIntro';
import Marksheet from './pages/msoffice/Marksheet';
import DateOfBirth from './pages/msoffice/DateOfBirth';
import Ribbon from './pages/msoffice/Ribbon';
import DataEntry from './pages/msoffice/DataEntry';
import { HLOOKUP } from './pages/msoffice/HLookup';
import { VLOOKUP } from './pages/msoffice/VLookup';
import { ConditionalFormatting } from './pages/msoffice/ConditionalFormatting';
import { FlashFill } from './pages/msoffice/FlashFill';
import SumSeries from './pages/msoffice/SumSeries';
import ExcelChartPivot from './pages/msoffice/ExcelChartPivot';
import HTMLLayout from './pages/html/HTMLLayout';
import Introduction from './pages/html/Introduction';
import TagExample from './pages/html/TagExample';
import FontSizeTag from './pages/html/FontSizeTag';
import BasicTags from './pages/html/BasicTags';
import HighlightTags from './pages/html/HighlightTags';
import SubSupTags from './pages/html/SubSupTags';
import InsertDeleteTags from './pages/html/InsertDeleteTags';
import BackgroundColorTag from './pages/html/BackgroundColorTag';
import HexadecimalColors from './pages/html/HexadecimalColor';
import ScrollText from './pages/html/ScrollText';
import HtmlListsExample from './pages/html/HtmlListsExample';
import NestedList from './pages/html/NestedList';
import HtmlTableIntro from './pages/html/HtmlTableIntro';
import MarksheetTable from './pages/html/MarksheetTable';
import FontProperties from './pages/html/FontProperties';
import ImageInsert from './pages/html/ImageInsert';
import MediaTag from './pages/html/MediaTag';
import FormDemo from './pages/html/FormDemo';
import DataEntryForm from './pages/html/DataEntryForm';
import RegistrationForm from './pages/html/ResgistrationForm';
import LinkTag from './pages/html/LinkTag';
import FaviconTag from './pages/html/FaviconTag';
import CSSIntro from './pages/css/CSSIntro';
import CSSLayout from './pages/css/CSSLayout';
import CSSLinkTag from './pages/css/CSSLinkTag'; 
import Border from './pages/css/Border';
import TextProperties from './pages/css/TextProperties';
import FontStyle from './pages/css/FontStyle';
import Background from './pages/css/Background';
import Margin from './pages/css/Margin';
import BackgroundProperties from './pages/css/BackgroundProperties';
import Padding from './pages/css/Padding';
import Display from './pages/css/Display';
import Selector from './pages/css/Selector';
import CLayout from './pages/c/CLayout';
import CIntro from './pages/c/CIntroduction';
import SwapC from './pages/c/SwapC';
import EBBill from './pages/c/EBBill';
import AddAndMul from './pages/c/AddAndMul';
import SubAndDiv from './pages/c/SubAndDiv';
import CIdentifiers from './pages/c/CIdentifiers';
import ASCII from './pages/c/ASCII';
import CSSFlexBox from './pages/css/CSSFlexBox';
import CSSFloat from './pages/css/CSSFloat';
import CSSHover from './pages/css/CSSHover';
import CSSTransition from './pages/css/CSSTransition';
import CSSFlexContainer from './pages/css/CSSFlexContainer';
import CSSFlexWrap from './pages/css/CSSFlexWrap';
import CSSJustifyContent from './pages/css/CSSJustifyContent';
import CSSAlignItems from './pages/css/CSSAlignItems';
import CSSAlignContent from './pages/css/CSSAlignContent';
import CSSGrid from './pages/css/CSSGrid';
import CSSTransform2D from './pages/css/CSSTransform2D';
import CSSTransform3D from './pages/css/CSSTranform3D';
import CSSCombinators from './pages/css/CSSCombinators';
import CSSAnimation from './pages/css/CSSAnimation';
import AnimatedButton from './pages/css/AnimatedButton';
import ButtonDesigns from './pages/css/ButtonDesigns';
import AnimationFillMode from './pages/css/AnimationFillMode';
import ImageButton from './pages/css/ImageButton';
import CSSDropdown from './pages/css/CSSDropdown';
import ImageDropdown from './pages/css/ImageDropdown';
import CSSLinearGradients from './pages/css/CSSLinearGradients';
import Datatypes from './pages/c/Datatypes';
import CShortcutKeys from './pages/c/CShortcutKeys';
import EnumDatatype from './pages/c/EnumDataType';
import CComments from './pages/c/CComments';
import CFormatSpecifiers from './pages/c/CFormatSpecifiers';
import CFeatures from './pages/c/CFeatures';
import CKeywords from './pages/c/CKeywords';
import CSampleIntFloat from './pages/c/CSampleIntFloat';
import CSubMulDiv from './pages/c/CSubMulDiv';
import CVariables from './pages/c/CVaribles';
import CBasics from './pages/c/CBasics';
import VariableTypes from './pages/c/VariableTypes';
import Break from './pages/c/Break';
import Char from './pages/c/Char';
import Const from './pages/c/Const';
import Continue from './pages/c/Continue';
import Default from './pages/c/Default';
import Extern from './pages/c/Extern';
import Enum from './pages/c/Enum';
import Do from './pages/c/Do';
import Else from './pages/c/Else';
import Double from './pages/c/Double';
import Arithmetic from './pages/c/Arithmetic';
import Logical from './pages/c/Logical';
import Bitwise from './pages/c/Bitwise';
import Relational from './pages/c/Relational';
import IncrementDecrement from './pages/c/IncrementDecrement';
import Ternary from './pages/c/Ternary';
import Unary from './pages/c/Unary';
import Assignment from './pages/c/Assignment';
import IfElse from './pages/c/IfElse';
import Boolean from './pages/c/Boolean';
import AutoVariable from './pages/c/AutoVariable';
import ExternVariable from './pages/c/ExternVariable';
import COperators from './pages/c/COperators';
import MiscOperator from './pages/c/MiscOperators';
import ControlStatementIntro from './pages/c/ControlStatementIntro';
import IfStatement from './pages/c/IfStatement';
import IfElseStatement from './pages/c/IfElseStatement';
import IfElseIfLadder from './pages/c/IfElseIfLadder';
import NestedIf from './pages/c/NestedIf';
import ShiftOperators from './pages/c/ShiftOperators';
import LeftShift from './pages/c/LeftShift';
import RightShift from './pages/c/RightShift';
import SwitchC from './pages/c/SwitchC';
import LoopIntro from './pages/c/LoopIntro';
import LoopTypes from './pages/c/LoopTypes';
import GotoStatement from './pages/c/GotoStatement';
import ArrayIntro from './pages/c/ArrayIntro';
import OneDArray from './pages/c/OneDArray';
import TwoDArray from './pages/c/TwoDArray';
import MultiDArray from './pages/c/MultiDArray';
import PointerIntro from './pages/c/PointerIntro';
import PointerDemo from './pages/c/PointerDemo';
function App() {  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/course" element={<ApplicationCourse />} />
        {/* Nested Routes under /fundamentals */}
        <Route path="/fundamentals" element={<FundamentalsLayout />}>
        <Route index element={<IntroPage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="generation" element={<Generation />} />
          <Route path="devices" element={<Devices />} />
          <Route path="Memory" element={<Memory />} />
          <Route path="HardwareSoftware" element={<HardwareSoftware />} />
          <Route path="ProgrammingLanguages" element={<ProgrammingLanguages />} />
          <Route path="BitAndComputer" element={<BitAndComputer />} />
          <Route path="BitAndComputer" element={<BitAndComputer />} />
        </Route>
        {/* Nested Routes under /msword */}
        <Route path="/msword" element={<MSOfficeLayout />}>
        <Route index element={<MSWordIntro />} />
          <Route path="shortcutkey" element={<ShortcutKey />} />
          <Route path="Formula" element={<Formula />} />
          <Route path="Practice" element={<Practice />} />
          <Route path="mswordintro" element={<MSWordIntro />} />
          <Route path="Marksheet" element={<Marksheet />} />
          <Route path="DateOfBirth" element={<DateOfBirth />} />
          <Route path="Ribbon" element={<Ribbon />} />
          <Route path="DataEntry" element={<DataEntry />} />
          <Route path="HLookup" element={<HLOOKUP />} />
          <Route path="VLookup" element={<VLOOKUP />} />
          <Route path="FlashFill" element={<FlashFill />} />
          <Route path="ConditionalFormating" element={<ConditionalFormatting />} />
          <Route path="SumSeries" element={<SumSeries />} />
          <Route path="ExcelChartPivot" element={<ExcelChartPivot />} />
        </Route>

        <Route path="/html" element={<HTMLLayout />}>
        <Route index element={<Introduction />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="TagExample" element={<TagExample />} />
          <Route path="FontSizeTag" element={<FontSizeTag />} />
          <Route path="BasicTags" element={<BasicTags />} />
          <Route path="HighlightTags" element={<HighlightTags />} />
          <Route path="SubSupTags" element={<SubSupTags />} />
          <Route path="InsertDeleteTags" element={<InsertDeleteTags />} />
          <Route path="BackgroundColorTag" element={<BackgroundColorTag />} />
          <Route path="HexadecimalColors" element={<HexadecimalColors />} />
          <Route path="ScrollText" element={<ScrollText />} />
          <Route path="HtmlListsExample" element={<HtmlListsExample />} />
          <Route path="NestedList" element={<NestedList />} />
          <Route path="HtmlTableIntro" element={<HtmlTableIntro />} />
          <Route path="MarksheetTable" element={<MarksheetTable />} />
          <Route path="FontProperties" element={<FontProperties />} />
          <Route path="ImageInsert" element={<ImageInsert />} />
          <Route path="MediaTag" element={<MediaTag />} />
          <Route path="FormDemo" element={<FormDemo />} />
          <Route path="DataEntryForm" element={<DataEntryForm />} />
          <Route path="RegistrationForm" element={<RegistrationForm />} />
          <Route path="LinkTag" element={<LinkTag />} />
          <Route path="FaviconTag" element={<FaviconTag />} />
        </Route>


        <Route path="/css" element={<CSSLayout />}>
        <Route index element={<CSSIntro />} />
          <Route path="CSSIntro" element={<CSSIntro />} />
          <Route path="CSSLinkTag" element={<CSSLinkTag />} />
          <Route path="Border" element={<Border />} />
          <Route path="TextProperties" element={<TextProperties />} />
          <Route path="FontStyle" element={<FontStyle />} />
          <Route path="Background" element={<Background />} />
          <Route path="margin" element={<Margin />} />
          <Route path="BackgroundProperties" element={<BackgroundProperties />} />
          <Route path="Padding" element={<Padding />} />
          <Route path="Display" element={<Display />} />
          <Route path="Selector" element={<Selector />} />
          <Route path="CSSFlexBox" element={<CSSFlexBox />} />
          <Route path="CSSFloat" element={<CSSFloat />} />
          <Route path="CSSHover" element={<CSSHover />} />
          <Route path="CSSTransition" element={<CSSTransition />} />
          <Route path="CSSFlexContainer" element={<CSSFlexContainer />} />
          <Route path="CSSFlexWrap" element={<CSSFlexWrap />} />
          <Route path="CSSJustityContent" element={<CSSJustifyContent />} />
          <Route path="CSSAlignItems" element={<CSSAlignItems />} />
          <Route path="CSSAlignContent" element={<CSSAlignContent />} />
          <Route path="CSSGrid" element={<CSSGrid />} />
          <Route path="CSSTransform2D" element={<CSSTransform2D />} />
          <Route path="CSSTransform3D" element={<CSSTransform3D />} />
          <Route path="CSSCombinators" element={<CSSCombinators />} />
          <Route path="CSSAnimation" element={<CSSAnimation />} />
          <Route path="AnimatedButton" element={<AnimatedButton />} />
          <Route path="ButtonDesigns" element={<ButtonDesigns />} />
          <Route path="AnimationFillMode" element={<AnimationFillMode />} />
          <Route path="ImageButton" element={<ImageButton />} />
          <Route path="CSSDropdown" element={<CSSDropdown />} />
          <Route path="ImageDropdown" element={<ImageDropdown />} />
          <Route path="CSSLinearGradients" element={<CSSLinearGradients />} />
        </Route>

         <Route path="/c" element={<CLayout />}>
        <Route index element={<CIntro />} />
          <Route path="CIntro" element={<CIntro />} />
          <Route path="SwapC" element={<SwapC />} />
          <Route path="EBBill" element={<EBBill />} />
          <Route path="IfElse" element={<IfElse />} />
          <Route path="AddAndMul" element={<AddAndMul />} />
          <Route path="SubAndDiv" element={<SubAndDiv />} />
          <Route path="CIdentifiers" element={<CIdentifiers />} />
          <Route path="ASCII" element={<ASCII />} />
          <Route path="Datatypes" element={<Datatypes />} />
          <Route path="CShortcutKeys" element={<CShortcutKeys />} />
          <Route path="EnumDataType" element={<EnumDatatype />} />
          <Route path="CComments" element={<CComments />} />
          <Route path="CFormatSpecifiers" element={<CFormatSpecifiers />} />
          <Route path="CFeatures" element={<CFeatures />} />
          <Route path="CKeywords" element={<CKeywords />} />
          <Route path="CSampleIntFloat" element={<CSampleIntFloat />} />
          <Route path="CSubMulDiv" element={<CSubMulDiv />} />
          <Route path="CVariables" element={<CVariables />} />
          <Route path="CBasics" element={<CBasics />} />
          <Route path="Break" element={<Break />} />
          <Route path="Char" element={<Char />} />
          <Route path="VariableTypes" element={<VariableTypes />} />
          <Route path="Const" element={<Const />} />
          <Route path="Continue" element={<Continue />} />
          <Route path="Default" element={<Default />} />
          <Route path="Do" element={<Do />} />
          <Route path="Double" element={<Double />} />
          <Route path="Else" element={<Else />} />
          <Route path="Enum" element={<Enum />} />
          <Route path="Arithmetic" element={<Arithmetic />} />
          <Route path="Bitwise" element={<Bitwise />} />
          <Route path="Logical" element={<Logical />} />
          <Route path="Relational" element={<Relational />} />
          <Route path="IncrementDecrement" element={<IncrementDecrement />} />
          <Route path="Ternary" element={<Ternary />} />
          <Route path="Extern" element={<Extern />} />
          <Route path="Unary" element={<Unary />} />
          <Route path="Assignment" element={<Assignment />} />
          <Route path="Boolean" element={<Boolean />} />
          <Route path="AutoVariable" element={<AutoVariable />} />
          <Route path="ExternVariable" element={<ExternVariable />} />
          <Route path="COperators" element={<COperators />} />
          <Route path="MiscOperators" element={<MiscOperator />} />
          <Route path="ControlStatementIntro" element={<ControlStatementIntro />} />
          <Route path="IfStatement" element={<IfStatement />} />
          <Route path="IfElseStatement" element={<IfElseStatement />} />
          <Route path="IfElseIfLadder" element={<IfElseIfLadder />} />
          <Route path="NestedIf" element={<NestedIf />} />
          <Route path="ShiftOperators" element={<ShiftOperators />} />
          <Route path="LeftShift" element={<LeftShift />} />
          <Route path="RightShift" element={<RightShift />} />
          <Route path="SwitchC" element={<SwitchC />} />
          <Route path="LoopIntro" element={<LoopIntro />} />
          <Route path="LoopTypes" element={<LoopTypes />} />
          <Route path="GotoStatement" element={<GotoStatement />} />
          <Route path="ArrayIntro" element={<ArrayIntro />} />
          <Route path="OneDArray" element={<OneDArray />} />
          <Route path="TwoDArray" element={<TwoDArray />} />
          <Route path="MultiDArray" element={<MultiDArray />} />
          <Route path="PointerIntro" element={<PointerIntro />} />
          <Route path="PointerDemo" element={<PointerDemo />} />
          
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
