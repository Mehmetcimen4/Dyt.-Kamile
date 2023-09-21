import React from 'react'
import kamile from '../total/images/kamile.jpeg'
import { Who } from './Who';
import { Login } from './Login';
export const About = () => {
  return (
    <div id='about'>
      <div>
       <div className='diet-food'>
          <div className='about-conteiner'>
        <h1 className='about-text'>HAKKIMDA</h1>
         <div className='about-div'>
        <h3 className='about-div-title'>Merhabalar Ben Kamile</h3>
        <p className='about-div-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, reiciendis? Eligendi quis optio impedit placeat, veritatis pariatur architecto suscipit distinctio est cupiditate molestiae tenetur? Vero nostrum reprehenderit in pariatur dolorem quod saepe enim ullam quos placeat beatae repudiandae dicta aperiam hic aliquam sequi doloremque, sunt, doloribus maxime, ducimus tenetur quia dolore. Excepturi minima nam quidem assumenda corporis facere rem asperiores quisquam velit! Quis facilis alias quibusdam in excepturi nam nesciunt incidunt voluptatem vel sequi obcaecati optio vitae ratione repellat mollitia, saepe quia doloremque ipsa minima ullam. Dolores odit minima, sed maxime aut natus officiis incidunt eum. Illo veniam nulla est?</p>
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

