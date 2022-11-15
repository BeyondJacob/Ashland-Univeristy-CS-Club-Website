import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render(){
      return (
        <>
          <footer>
            <div className="footer-nav">
              <h3>About Us</h3>
              <p><a href=""># Values and Mission</a></p>
              <p><a href=""># Faculty Sponsor</a></p>
              <p><a href=""># Member Directory</a></p>
              <p><a href=""># Contact Us</a></p>
            </div>
            <div className="footer-nav">
              <h3>Teams</h3>
              <p><a href=""># Competitive Programming</a></p>
              <p><a href=""># Data Science</a></p>
              <p><a href=""># Mobile Application Devleopment</a></p>
              <p><a href=""># Web Development</a></p>
            </div>
            <div className="footer-nav">
              <h3>Porfolio</h3>
              <p><a href=""># Club Showcase</a></p>
              <p><a href=""># Personal Showcase</a></p>
            </div>
            <div className="footer-nav">
              <h3>Join</h3>
              <p><a href=""># Why Join?</a></p>
              <p><a href=""># Member Sign-up</a></p>
              <p><a href="https://discord.gg/VnRnU5MKmw" target="_blank"># Discord</a></p>
            </div>
            <div className="footer-logos">
              <img src="Assets/Logos/AU/ACMLogoOne.svg" alt="AU Logo" width="60%"/>
              <img src="Assets/Logos/AU/AUwithEagleLogoOne.svg" alt="ACM Logo"/>
            </div>
          </footer>
        </>
      )
  }
}
export default Footer;