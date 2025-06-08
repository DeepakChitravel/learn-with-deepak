import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FundamentalsLayout from './pages/fundamentals/FundamentalsLayout';
import IntroPage from './pages/fundamentals/IntroPage';
import Generation from './pages/fundamentals/Generation';
import ApplicationCourse from './pages/ApplicationCourse';
import Devices from './pages/fundamentals/Devices';
import Memory from './pages/fundamentals/Memory';
import HardwareSoftware from './pages/fundamentals/HardwareSoftware';
import ProgrammingLanguages from './pages/fundamentals/ProgrammingLanguages';
import BitAndComputer from './pages/fundamentals/BitAndComputer';
import ShortcutKey from './pages/msoffice/ShortcutKey';
import MSWordLayout from './pages/msoffice/MSWordLayout';
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/course" element={<ApplicationCourse />} />
        {/* Nested Routes under /fundamentals */}
        <Route path="/fundamentals" element={<FundamentalsLayout />}>
          <Route path="intro" element={<IntroPage />} />
          <Route path="generation" element={<Generation />} />
          <Route path="devices" element={<Devices />} />
          <Route path="Memory" element={<Memory />}/>
          <Route path="HardwareSoftware" element={<HardwareSoftware />} />
          <Route path="ProgrammingLanguages" element={<ProgrammingLanguages />} />
          <Route path="BitAndComputer" element={<BitAndComputer />} />
          <Route path="BitAndComputer" element={<BitAndComputer />} />
        </Route>
 {/* Nested Routes under /msword */}
        <Route path="/msword" element={<MSWordLayout />}>
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
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
