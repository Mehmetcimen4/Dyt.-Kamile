import React from 'react'
import regt from '../total/images/rectangle-415.png'
export const About = () => {
  return (
    <div id='about'>
      <div>
       <div className='diet-food'>
          <div className='about-conteiner'>
        <p className='about-text'>HAKKIMDA</p>
      </div>
      </div>
    
      <div>
        <img src={regt} alt="" />
      </div>
      <div className='about-div'>
        <h3 className='about-div-title'>Merhabalar Ben Kamile</h3>
        <p className='about-div-text'></p>
      </div>
    </div>
     
    </div>
  )
}
export default About;
