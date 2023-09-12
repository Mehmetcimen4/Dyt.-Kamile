import React from 'react'
import kamile from '../total/images/kamile.jpeg'
import { Who } from './Who';
export const About = () => {
  return (
    <div id='about'>
      <div>
       <div className='diet-food'>
          <div className='about-conteiner'>
        <h1 className='about-text'>HAKKIMDA</h1>
         <div className='about-div'>
        <h3 className='about-div-title'>Merhabalar Ben Kamile</h3>
        <p className='about-div-text'></p>
      </div>
      <div className='about-photo'>
        <img width='260px' height='365px' src={kamile}></img>
      </div>
      </div>
      
     
    </div> 
    </div>

      <Who></Who>
    </div>
  )
}
export default About;
