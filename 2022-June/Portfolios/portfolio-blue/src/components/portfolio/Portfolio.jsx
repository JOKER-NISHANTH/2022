import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/myPort.png"
import IMG2 from "../../assets/todoJavaScript.png"
import IMG3 from "../../assets/gameTie.png"
import IMG4 from "../../assets/mycake.png"

const data = [
  {
    id:1,
    image:IMG1,
    title:"Static Site Using HTML ,  CSS and JavaScript",
    github:"https://github.com/mr-nishanth/portfolio",
    demo:"https://mr-nishanth.github.io/portfolio",
  },{
    id:2,
    image:IMG2,
    title:"Todo Using JavaScript",
    github:"https://github.com/mr-nishanth/todolistP1",
    demo:"https://mr-nishanth.github.io/todolistP1/",
  },{
    id:3,
    image:IMG3,
    title:"Tic-tac-toe Game",
    github:"https://github.com/mr-nishanth/Tic-tac-toe",
    demo:"https://mr-nishanth.github.io/Tic-tac-toe/",
  },{
    id:4,
    image:IMG4,
    title:"Cake Landing Page",
    github:"https://github.com/mr-nishanth/MyCake",
    demo:"https://mr-nishanth.github.io/MyCake",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {

          data.map(({id,image,title,github,demo}) => {
            return (
              <article keys={id} className="portfolio__item">
                <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                </div>
                      <h3>{title}</h3>
                <div className="portfolio__item-cta">
                      <a href={github} className='btn' target="_blank">GitHub</a>
                      <a href={demo} className='btn btn-primary' target="_blank">Live</a>
                </div>
            </article>
            )
            })
          }

      </div>
    </section>
  )
}

export default Portfolio