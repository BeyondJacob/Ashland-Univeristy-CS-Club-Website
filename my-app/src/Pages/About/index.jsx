import React from 'react';
import './aboutus.css';
import Footer from '../../Components/Footer';
import TopNav from '../../Components/TopNav';
import StaffCard from './StaffCard';
import TECHNOLOGIES from '../../Assets/Logos/Technologies';

// Below causes React Routing error:
// const AboutPage = () =>
function AboutPage() {
  return (
    <>     
      <div className='App'>
        <TopNav />
      </div>
      <div className='about-one-section'>
        <div className='App'>
          <div>
            <img className='about-img-aupromise' src="Assets/Logos/AU/The-Ashland-Promise.png" alt="AU Promise" width="30%"/>
            <div className='about-yt'>
              <iframe className='about-yt-video'  height="500px" src="https://www.youtube.com/embed/r-xOnwh3fEo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>


      {/* Section Two */}
      <div className='App'>

      </div>
      <h1>Meet the Staff</h1>

      {/* Faculty Sponsor */}
      <div className='App'>
        <div className='about-staffcard-faculty'>
          {/* Img of person */}
          <div className='about-img-placeholder'></div>
          <div>
            <div className='about-staffcard-content'>
              <StaffCard name='Selvanayaki Kolandapalayam Shanmugam, Ph.D.' status='Assistant Professor' major='Computer Science' gradDate='2021 - Present'/>
              {/* Technology Stack */}
              <div className='about-techstack'>
                <img src={ TECHNOLOGIES.JSLogo } 
                alt='JavaScript'/>
                <img src={ TECHNOLOGIES.PythonLogo } 
                alt='Python'/>
                <img src={ TECHNOLOGIES.JavaLogo } 
                alt='Java'/>
                <img src={ TECHNOLOGIES.HTMLLogo } 
                alt='HTML'/>
                <img src={ TECHNOLOGIES.CSSLogo } 
                alt='CSS'/>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Staff Cards with React Props */}
      <div className='App'>
        {/* First Row */}
        <div className='about-staf-rows'>
          {/* President */}
          <div className='about-staffcard'>
            {/* Img of person */}
            <div className='about-img-placeholder'></div>
            <div className='about-staffcard-content'>
              <StaffCard name='Jacob Owens' status='President' major='Computer Science' gradDate='Class of 2023'/>
              {/* Technology Stack */}
              <div className='about-techstack'>
                <img src={ TECHNOLOGIES.AWSLogo } 
                alt='AWS'/>
                <img src={ TECHNOLOGIES.ReactLogo } 
                alt='React'/>
                <img src={ TECHNOLOGIES.SwiftLogo } 
                alt='Swift'/>
                <img src={ TECHNOLOGIES.JiraLogo } 
                alt='Jira'/>
                <img src={ TECHNOLOGIES.FigmaLogo } 
                alt='Figma'/>
              </div>
            </div>
          </div>

          {/* VP */}
          <div className='about-staffcard'>
            {/* Img of person */}
            <div className='about-img-placeholder'></div>
            <div className='about-staffcard-content'>
              <StaffCard name='Amar Sapcanin' status='Vice President' major='Computer Science' gradDate='Class of 2023'/>
              {/* Technology Stack */}
              <div className='about-techstack'>
                <img src={ TECHNOLOGIES.JSLogo } 
                alt='JavaScript'/>
                <img src={ TECHNOLOGIES.JavaLogo } 
                alt='Java'/>
                <img src={ TECHNOLOGIES.PythonLogo } 
                alt='Python'/>
              </div>
            </div>
          </div>
        </div>


        {/* Second Row */}
        <div className='about-staf-rows'>
          {/* President */}
          <div className='about-staffcard'>
            {/* Img of person */}
            <div className='about-img-placeholder'></div>
            <div className='about-staffcard-content'>
              <StaffCard name='Katie Scheutzow' status='Treasurer' major='Computer Science' gradDate='Class of 2024'/>
              {/* Technology Stack */}
              <div className='about-techstack'>
                <img src={ TECHNOLOGIES.JavaLogo } 
                alt='Java'/>
                <img src={ TECHNOLOGIES.HTMLLogo } 
                alt='HTML'/>
                <img src={ TECHNOLOGIES.CSSLogo } 
                alt='CSS'/>
                <img src={ TECHNOLOGIES.JiraLogo } 
                alt='AWS'/>
              </div>
            </div>
          </div>

          {/* VP */}
          <div className='about-staffcard'>
            {/* Img of person */}
            <div className='about-img-placeholder'></div>
            <div className='about-staffcard-content'>
              <StaffCard name='Jules Papesh' status='Lab Manager' major='Computer Science' gradDate='Class of 2025'/>
              {/* Technology Stack */}
              <div className='about-techstack'>
                <img src={ TECHNOLOGIES.JavaLogo } 
                alt='Java'/>
                <img src={ TECHNOLOGIES.HTMLLogo } 
                alt='HTML'/>
                <img src={ TECHNOLOGIES.CSSLogo } 
                alt='CSS'/>
                <img src={ TECHNOLOGIES.JiraLogo } 
                alt='AWS'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='App'>
        <Footer />
      </div>
    </>
  )
};

export default AboutPage;