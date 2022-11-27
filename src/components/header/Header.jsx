import React from 'react'
import './header.css'
import CTA from './CTA';
import MYPHOTO from '../../assets/ashraf-img1.png';
import Socials from './Socials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, everyone. I'm</h5>
        <h1>Ashraf Tanin</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={MYPHOTO} alt="ME" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header