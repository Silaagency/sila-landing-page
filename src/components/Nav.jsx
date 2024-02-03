import React from 'react'
import '../styles/nav.css';
import logo from '../images & logos/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.webp';

function Nav() {
  return (
    <div className='nav'>
        <div className="nav-btns">
            <a href='#who-are-we' className="who-are-we">
                <p>من نحن</p>
                <div className="btn-line"></div>
            </a>
            <a href='#features' className="experiences">
                <p>خبراتنا</p>
                <div className="btn-line"></div>
            </a>
            <a href='#services' className="services">
                <p>خدماتنا</p>
                <div className="btn-line"></div>
            </a>
        </div>

        <img src={logo} alt="" />
    </div>
  )
}

export default Nav