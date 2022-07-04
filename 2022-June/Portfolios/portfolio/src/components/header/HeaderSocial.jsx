import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from "react-icons/bs"
const HeaderSocial = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/n1shanth-m/" target="_blank" rel="noreferrer" >
              <BsLinkedin />
          </a>
          <a href="https://github.com/mr-nishanth/" target="_blank" rel="noreferrer">
            <BsGithub />
            </a>
          <a href="https://www.instagram.com/nisha_yalu_raja/" target="_blank" rel="noreferrer">
          < BsInstagram />
            </a>
    </div>
  )
}

export default HeaderSocial

// BsLinkedin
