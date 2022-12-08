import React from 'react';
import './topnav.css'
import { Outlet, Link } from "react-router-dom";

class TopNav extends React.Component {
  render(){
      return (
        <>
          <header>
            <img className='header-logo' src="Assets/Logos/AU/AULogo.svg" alt="Ashland University" />
            <nav>
              <ul>
                <li className='nav-reg'>
                  <Link to="/Home">Home</Link>
                </li>
                <li className='nav-reg'>
                  <Link to="/About">About Us</Link>
                </li>
                <li className='nav-reg'>
                  <Link to="/Teams">Teams</Link>
                </li>
                <li className='nav-reg'>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li className='nav-join'>
                  <Link to="/Join">Join</Link>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )
  }
}
export default TopNav;
