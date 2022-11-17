import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import AboutPage from "./Pages/About";
import TeamPage from "./Pages/Teams";
import PortfolioPage from "./Pages/Portfolio";
import JoinPage from "./Pages/Join";
import NoPage from "./Pages/404"
import Layout from './Pages/Layout';

function App() {
  return (
    <>
      {/* <Router>  
        <Routes> */}
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          {/* <Route path="/" component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Teams" component={TeamPage} />
          <Route path="/Portfolio" component={PortfolioPage} />
          <Route path="/Join" component={JoinPage} /> */}
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Navigate to="/" />
        </Routes>
      </Router> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<HomePage />} />
            <Route path="About" element={<AboutPage />} />
            <Route path="Teams" element={<TeamPage />} />
            <Route path="Portfolio" element={<PortfolioPage />} />
            <Route path="Join" element={<JoinPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;