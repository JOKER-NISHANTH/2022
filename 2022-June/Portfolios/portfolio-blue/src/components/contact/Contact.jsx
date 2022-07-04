import React, { useRef } from "react";
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import { BsWhatsapp,BsLinkedin} from "react-icons/bs"

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_raz7mmu', 'template_lenpqdh', form.current, 'U6e3Nk1FbSEc1_tCS') temp email
    emailjs.sendForm('service_tl8ggy8', 'template_hz60z5d', form.current, '_Rdwq5CbQVXdxbDEg') //softwaretesterdev@gmail.com
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

      <div className="contact__options">

      <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>nishanthxxx@gmail.com</h5>
            <a href="mailto:nishanthmohan2000@gmail.com" target="_blank" rel="noreferrer"  >Send an email</a>
          </article>

          <article className="contact__option">
          <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Nishanth M</h5>
            <a href="https://www.linkedin.com/in/n1shanth-m/" target="_blank" rel="noreferrer" >Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 971xxxxxxxx</h5>
            <a href="https://wa.me/919715079782?text=Hello!%20Nishanth" target="_blank" rel="noreferrer" >Ping Me</a>
          </article>


      </div>

{/* END OF CONTACT OPTIONS gajicad726@lankew.com*/}

          <form ref={form} onSubmit={sendEmail}  autocomplete="off">
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
      </div>


    </section>
  )
}

export default Contact