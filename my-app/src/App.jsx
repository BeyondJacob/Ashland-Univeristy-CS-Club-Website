import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import TeamPage from "./Pages/Teams";
import PortfolioPage from "./Pages/Portfolio";
import JoinPage from "./Pages/Join";
import NoPage from "./Pages/404"
import AboutPage from './Pages/About';
// import Layout from './Pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/src/Layout" element={<Layout />}> */}
            <Route path="Home" element={<HomePage />} />
            <Route path="About" element={<AboutPage />} />
            <Route path="Teams" element={<TeamPage />} />
            <Route path="Portfolio" element={<PortfolioPage />} />
            <Route path="Join" element={<JoinPage />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;