import React from 'react';
import './error.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';

const NoPage = () => {
  return (
    <>
      <div className="App">
        <TopNav />
        <div class="main-content">
          <h1>404</h1>
          <h2>The page you discovered, doesn't exist or is under construction!</h2>
          <p>Let us know about this error in our <a className='discordLink' href='https://discord.gg/VnRnU5MKmw' target='_blank'>Discord</a>!</p>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default NoPage;