import React from 'react'
import links from '../assets/links.json'

const Footer = () => {
  return (
    <footer>
      <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.link} target='_blank'>{link.label}</a>
        </li>
      ))}
      </ul>
      © {new Date().getFullYear()} Atlas School
    </footer>
  )
}

export default Footer
