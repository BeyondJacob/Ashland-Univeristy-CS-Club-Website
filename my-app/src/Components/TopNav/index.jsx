import React from 'react';
import './topnav.css'
import { Outlet, Link } from "react-router-dom";

class TopNav extends React.Component {
  render(){
      return (
        <>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  {/* Purposely broken for demo */}
                  <Link to="/Abouts">About Us</Link>
                </li>
                <li>
                  <Link to="/Teams">Teams</Link>
                </li>
                <li>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
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
