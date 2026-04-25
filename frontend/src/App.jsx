import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import CompBranch from './pages/CompBranch';
import MechBranch from "./pages/MechBranch";
import EcsBranch from './pages/EcsBranch';
import AidsBranch from "./pages/AidsBranch";
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import ReusablePDFViewer from "./components/ReusablePDFViewer";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer" element={<CompBranch />} />
        <Route path="/mechanical" element={<MechBranch />} />
        <Route path="/ecs" element={<EcsBranch />} />
        <Route path="/ai&ds" element={<AidsBranch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pdf/*" element={<ReusablePDFViewer />} />
      </Routes>
    </div>
  );
}

export default App;




