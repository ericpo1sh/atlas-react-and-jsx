import React from 'react'
import dayImg from '../assets/day.svg'
import eveningImg from '../assets/evening.svg'
import nightImg from '../assets/night.svg'

const Greeting = () => {
  const currentHour = new Date().getHours();

  let greeting;
  let image;

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Good Morning!';
    image = dayImg;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon!';
    image = dayImg;
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening!';
    image = eveningImg;
  } else {
    greeting = 'Good Night!';
    image = nightImg;
  }

  return (
    <h1 className='greeting'>
      <img src={image} alt={greeting}></img>
      {greeting}
    </h1>
  )
}

export default Greeting;
