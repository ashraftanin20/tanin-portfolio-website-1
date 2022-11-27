import React from 'react'
import './portfolio.css';
import shoppingCart from '../../assets/shopping-cart.png';
import blog from '../../assets/blog.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={shoppingCart} alt='Shopping Cart' />
            </div>
            <h3>Shopping Card</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/ashraftanin20/react-shopping-cart' className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href='https://lomani-shopping-cart.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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