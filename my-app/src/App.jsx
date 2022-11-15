import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './Pages/Home';
import AboutPage from "./Pages/About";
import TeamPage from "./Pages/Teams";
import PortfolioPage from "./Pages/Portfolio";
import JoinPage from "./Pages/Join";


function App() {
  return (
    <>
      <Router>  
        <Routes>
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/" component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Teams" component={TeamPage} />
          <Route path="/Portfolio" component={PortfolioPage} />
          <Route path="/Join" component={JoinPage} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;