import React from 'react'
import "./About.css"
// import ME from "../../assets/me-about.jpg";
import ME from "../../assets/or-about.jpg";
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
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Since 14 years old, I Found interest in playing Video Games, I Loved Playing Video Games, so I was wondering why not learn how these things are built and made ? My Brother Had a Windows Vista at the time and I Always enjoyed playing games like GTA,NFS and etc. I didn't really focus on learning how computers work until the age of 20 I really got into these things I really struggled getting to the right track but I finally got into the right track and here I am always learning and dedicated to learning new things from ethical hacking and web development to how Computer systems are built. I am only following my passion since doing the things you love will lead to success and here I am , I always look at the positive side of things, which allows me to be more creative and solve problems. I Love working in a team, working in a team makes things more productive.<br></br> Lastly I always love giving back, I follow one rule which I created <b><i>Learn From Mistake</i></b>.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About