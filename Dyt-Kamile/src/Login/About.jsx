import React from 'react'
import diyet from '../total/images/en-iyi-diyet-yemeklerijpg-f-zg-k-11.png'
export const About = () => {
  return (
    <div id='about'>
      <div>
       <div className='diet-food'>
        <img src={diyet} alt="diyet" />
      </div>
      <div className='about-conteiner'>
        <p className='about-text'>HAKKIMDA</p>
      </div>
    </div>
     
    </div>
  )
}
