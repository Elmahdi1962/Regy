import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <small>&copy; Created By</small>
      <div className='name'>Elmahdi
        <a href="https://github.com/Elmahdi1962" target="_blank" className='githubLink links'><BsGithub /></a>
        <a href="https://www.linkedin.com/in/elmahdi-mamoun-a74a1a1bb/" target="_blank" className='linkedinLink links'><BsLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer
