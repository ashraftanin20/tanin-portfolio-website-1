import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLocalLaundryService, MdOutlineContactMail } from 'react-icons/md';
import { BiBookHeart } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav=== '#' ? 'active' :''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' :''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' :''}><BiBookHeart /></a>
      <a href='#services' onClick={() => setActiveNav('#service')} className={activeNav=== '#service' ? 'active' :''}><MdOutlineLocalLaundryService /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' :''}><MdOutlineContactMail /></a>
    </nav>
  )
}

export default Nav