import React from 'react';
import './home.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';

function HomePage() {
  return (
    <div className="App">
      <TopNav />
      <div class="main-content">
        <h1>Home Page!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;