import React from 'react'
import open from '../assets/open.svg'

const OpenLink = ({link}) => {
  return (
    <div>
      <a href={link} target='_blank'>
        <img src={open}></img>
      </a>
    </div>
  )
}

export default OpenLink
