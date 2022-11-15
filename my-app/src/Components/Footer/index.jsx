import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render(){
      return (
        <>
          <footer>
            <div className="footer-nav">
              <h3>About Us</h3>
              <p># Values and Mission</p>
              <p># Faculty Sponsor</p>
              <p># Member Directory</p>
              <p># Contact Us</p>
            </div>
            <div className="footer-nav">
              <h3>Teams</h3>
              <p># Competitive Programmings</p>
              <p># Data Science</p>
              <p># Mobile Application Devleopment</p>
              <p># Web Development</p>
            </div>
            <div className="footer-nav">
              <h3>Porfolio</h3>
              <p># Club Showcase</p>
              <p># Personal Showcase</p>
            </div>
            <div className="footer-nav">
              <h3>Join</h3>
              <p># Why Join?</p>
              <p># Member Sign-up</p>
              <p># Discord</p>
            </div>
            <div className="footer-logos">

            </div>
          </footer>
        </>
      )
  }
}
export default Footer;