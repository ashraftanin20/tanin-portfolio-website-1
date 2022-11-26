import React from 'react'
import {BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/ashraftanin/' target={'_blank'} rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/ashraftanin20' target={'_blank'} rel="noreferrer"><BsGithub /></a>
        <a href='https://dribbble.com/ashraftanin20' target={'_blank'} rel="noreferrer"><BsDribbble /></a>
    </div>
  )
}

export default Socials