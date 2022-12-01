import React from 'react'
import './services.css'
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineMobile } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { SiMaterialdesign } from 'react-icons/si';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__header">
            <SiMaterialdesign className='service__header-icon'/>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design of modern User Interfaces for Web Applications.</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design of modern User Interfaces for Mobile Apps</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design of modern User Interfaces for Self-Service Kiosks.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__header">
            <CgWebsite className='service__header-icon'/>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Design and Development of modern Web Applications.</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design and Development of Mobile Apps</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design, Development and implementation of Self-Service Kiosks.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__header">
            <AiOutlineMobile className='service__header-icon'/>
            <h3>Mobile App & MIS</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Android Mobile native Apps</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>HR Management Information System.</p>
            </li>
            <li>
              <div>
              <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Finance Management Information System.</p>
            </li>
            <li>
              <div>
              <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Stock Management Information System</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services