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
              <p><a href="https://forms.gle/W8PC1LejQjDmc9f58" target='_blank'># Member Sign-up</a></p>
              <p><a href="https://discord.gg/VnRnU5MKmw" target="_blank"># Discord</a></p>
            </div>
            <div className="footer-logos">
              <button><a href='https://www.acm.org/'><img src="Assets/Logos/AU/ACMLogoOne.svg" alt="AU Logo" width="70%"></img></a></button>
              <button><a href='https://www.ashland.edu/'><img src="Assets/Logos/AU/AUwithEagleLogoOne.svg" alt="ACM Logo" width="100%"/></a></button>
            </div>
          </footer>
        </>
      )
  }
}
export default Footer;