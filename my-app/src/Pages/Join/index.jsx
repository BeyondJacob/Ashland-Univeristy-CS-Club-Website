import * as React from 'react'
import './join.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';
import WidgetBot from '../../Components/WidgetBot';

function JoinPage() {
  return (
    <div className="App">
      <TopNav />
      <div class="main-content">
        <h1>Join Page</h1>
        <WidgetBot />
      </div>
      <Footer />
    </div>
  );
}

export default JoinPage;