import React from 'react';
import './topnav.css'
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  render(){
      return (
        <>
          <header>
            <Link to="./Pages/"><img src="Assets/Logos/AU/AUACMOfficialLogo.svg" alt="AU ACM Logo"/></Link>
            <nav>
              <ul>
                <Link to="./Pages/About">About Us</Link>
                <Link to="./Pages/Teams">Teams</Link>
                <Link to="./Pages/Portfolio">Portfolio</Link>
                <Link to="./Pages/Join">Join Us</Link>
              </ul>
            </nav>
          </header>
        {/* This is the alias of BrowserRouter i.e. Router */}
        </>
      )
  }
}
export default TopNav;