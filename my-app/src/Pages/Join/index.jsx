import * as React from 'react'
import './join.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';
import WidgetBot from '../../Components/WidgetBot';
import { Helmet } from 'react-helmet';

function JoinPage() {
  return (
    <>
      <div className="App">
        <TopNav />
        <div class="main-content-join">
          <div className='join-one-section-discord'>
            <div>
              {/* Typing joining annimation here */}
              <h1>We inspire, showcase efforts, and humble everyday.</h1>
              <div className='join-one-section-discord-row'>
                <div className='join-one-section-discord-topic'>
                  <h3>👉 No major-minor requirement, just your interest.</h3>
                  <h3>👉 'Email-free' for clear communications.</h3>
                  <h3>👉 Membership is free for everyone.</h3>
                </div>
                <div className='join-one-section-discord-topic'>
                  <h3>👉 Opportunities come when you arrive.</h3>
                  <h3>👉 No homework, just your curiousity.</h3>
                  <h3>👉 Come when your schedule fits.</h3>
                </div>
              </div>
              <h1>Have Questions 🤔? Ask Here!</h1>
              <div>
                <WidgetBot className='join-one-section-discordwidget'/>
              </div>
            </div>
          </div>
          <div className='join-one-section-form'>
            <h1>No Questions? Let's Get Started 😎!</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd6tU9EHTTTe2WphiY9xfNevxfdZOYuzLGf1JkUtsBJENRgvw/viewform?embedded=true" width='800' height="650" frameborder="0" marginheight="0" marginwidth="0" loading='lazy'>Loading…</iframe>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default JoinPage;