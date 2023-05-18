import React from 'react'
import './header.css'
import CTA from './CTA';
import Socials from './Socials';
const Header = () => {
  return (
    <header>
      <div className="container header__container" id='header'>
        <h5>Hello, everyone. I'm</h5>
        <h1>Ashraf Tanin</h1>
        <h4>FULL STACK WEB DEVELOPER</h4>
        <CTA />
        <Socials />
       
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header