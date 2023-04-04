import React from 'react'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonials.css'
import img1 from '../../assets/testimonial1.JPG';
import img2 from '../../assets/testimonial4.jpg';
import img3 from '../../assets/testimonial3.JPG';

const data = [
  {
    avatar: img1,
    title: 'Moderating Students Conference',
    description: 'Moderating Students Conference at Kabul Polytechnic Uversity. During the conference students present thier internship projects and their work experience.'
  },
  {
    avatar: img2,
    title: 'Visiting MoD IT Director',
    description: 'Met Ministry of Defence (MoD), IT Director and NATO Resulote Support represintatives to start analyzing MISs at MoD.'
  },
  {
    avatar: img3,
    title: 'Certificate Distribution Ceremony',
    description: 'Recieving certificate after succesfull participation at Cyber Security Siminar at ADA University, Baku Azarbaijan.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination, Navigation ]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true}}
      >
        {
          data.map(({avatar, title, description}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='testimonial_avatar'>
                  <img src={avatar} alt={title} />
                </div>
                <h5 className='avatar__title'>{title}</h5>
                <small className='avatar__description'>{description}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials