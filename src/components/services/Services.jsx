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
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Development and implemation of Business Central</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design and Development of new features and components for BC using JS and Control add-in</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Advisory and Consulation on ERP implementation and integration</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__header">
            <CgWebsite className='service__header-icon'/>
            <h3>Customization</h3>
          </div>
          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Extending Customizing BC to fullfill your specific Buiness/company requirements</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
              <p>Design and Development of new and cusomized reports</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__header">
            <AiOutlineMobile className='service__header-icon'/>
            <h3>Integration</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Integration</p>
            </li>
            <li>
              <div>
                <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Integrating systems by developing API and connecting your internal systems or connecting with 3rd party</p>
            </li>
            <li>
              <div>
              <BsCheckCircle className='service__list-icon' />
              </div>
                <p>Importing your data to BC and exporting data based on company requirements</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services