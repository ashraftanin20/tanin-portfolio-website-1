import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { SlSocialSkype } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4i4tsmo', 'template_el5e6w4', form.current, 'xvfCMp32obllClFyN')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ashraf.tanin@gmail.com</h5>
            <a href='mailto:ashraf.tanin@gmail.com' target='_blank' rel="noreferrer">Send an Email</a>
          </article>
          <article className="contact__option">
            <SlSocialSkype className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>ashraf.tanin</h5>
            <a href='skype:ashraf.tanin?call' target='_blank' rel="noreferrer">Call To Skype</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsup</h4>
            <h5>+380632300613</h5>
            <a href="https://api.whatsapp.com/send?phone+380632300613" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact