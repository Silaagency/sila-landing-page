import React from 'react';
import '../styles/hero.css';
import socialMediaIcons from '../images & logos/social-icons.png';

function Hero() {
  return (
    <div className='hero'>
      <img src={socialMediaIcons} alt="" />
      <div className="hero-text">
        <p>وكالة تسويق التجارة الإلكترونية توفر لكم فريق من الخبراء في التجارة الالكترونية و التسويق الاكتروني</p>
      </div>
    </div>
  )
}

export default Hero