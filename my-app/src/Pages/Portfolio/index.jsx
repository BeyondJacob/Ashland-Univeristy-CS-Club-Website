import React from 'react';
import './portfolio.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';

function PortfolioPage() {
  return (
    <div className="App">
      <TopNav />
      <div class="main-content">
        <h1>Portfolio Page!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioPage;