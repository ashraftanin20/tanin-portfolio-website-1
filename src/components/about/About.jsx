import React from 'react'
import './about.css'
import about from '../../assets/about.JPG';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt='About Image' />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>5+ years Academic & Working</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>5+ Worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>5+ Completed</small>
          </article>
        </div>
        <p>
          I was born and grew up in the Ghazni province of Afghanistan. 
          After graduation from school, I attended in public university entrance exam so-called Kankor exam in Afghanistan in 2004. 
          I was accepted into the faculty of s . . .
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk More!</a>
      </div>
      </div>
    </section>
  )
}

export default About