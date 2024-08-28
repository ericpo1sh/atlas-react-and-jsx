import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <a href='https://www.linkedin.com/in/ericdzyk/'>
        <img src={linkedin}></img>
      </a>
      <a href='https://github.com/ericpo1sh'>
        <img src={github}></img>
      </a>
    </div>
  )
}

export default SocialLinks
