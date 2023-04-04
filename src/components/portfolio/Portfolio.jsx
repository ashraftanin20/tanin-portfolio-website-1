import React from 'react'
import './portfolio.css';
import lomani from '../../assets/lomani.png';
import blog from '../../assets/blog.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={lomani} alt='Shopping Cart' />
            </div>
            <h3>Lomani Express</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/ashraftanin20/lomani-react' className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href='https://lomani.onrender.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={blog} alt='Simple Blog' />
          </div>
          
          <h3>Simple Blogging App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://tanin-blog.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio