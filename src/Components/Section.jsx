import React from 'react'

const Section = (props) => {
  return (
    <div class="section">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Section
