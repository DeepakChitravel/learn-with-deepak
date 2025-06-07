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

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
