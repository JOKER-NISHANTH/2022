import React from 'react'
import "./About.css"
import ME from "../../assets/me-about.jpg";
import {FaAward,FaUserSecret} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Photo" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                    < FaUserSecret className="about__icon"/>
                    <h5>Experience</h5>
                    <h6>Pentester</h6>
                    <small>6+ Months</small>
              </article>
              <article className="about__card">
                    < FaAward className="about__icon"/>
                    <h5>Experience</h5>
                    <h6>Developer</h6>
                    <small>1+ Years</small>
              </article>
              <article className="about__card">
                    < VscFolderLibrary className="about__icon"/>
                    <h5>Projects</h5>
                    <small>6+ Completed</small>
              </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nulla voluptatibus dolor commodi omnis pariatur? Ullam unde deserunt aperiam officiis ab consequatur iusto est! Quod qui facilis minus magni explicabo!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About