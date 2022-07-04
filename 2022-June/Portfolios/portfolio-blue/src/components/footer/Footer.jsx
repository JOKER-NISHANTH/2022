import React from 'react'
import "./Footer.css"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Nishanth M</a>

      <ul className="permalinks">
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/nishanth_blacky" rel="noreferrer"><IoLogoTwitter /></a>
        <a href="https://www.instagram.com/nisha_yalu_raja/" target="_blank" rel="noreferrer">
          < FiInstagram />
            </a>
      <a href="https://www.linkedin.com/in/n1shanth-m/" target="_blank" rel="noreferrer" >
              <BsLinkedin />
          </a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Nishanth M, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer