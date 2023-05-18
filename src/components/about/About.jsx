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
            <img src={about} alt='About Me' />
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
        <p>My name is Ashraf Tanin and I am a Web Developer. I have done my Bachelor and Master of Science in Computer Science (Informatics).</p>
        <p>I have worked as IT advisor and then a web developer. I have solid experience with JavaScript, React, React-Redux, HTML, PHP (Laravel) CSS, Bootstrap, REST API, MySQL, MongoDB and Express.</p>
        <p>I have also good theoretical knowledge of data structure, Object Oriented Programming and software engineering. </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk More!</a>
      </div>
      </div>
    </section>
  )
}

export default About