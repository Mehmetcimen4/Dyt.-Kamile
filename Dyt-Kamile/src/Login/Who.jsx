import React from 'react'
import circles from '../total/images/circles.png'
import strawberries from '../total/images/strawberries.png'
export const Who = () => {
  return (
    <div className='who-div'>
    <div className='who-div-image1'> 
    <p className='who-text-p who-top '>KİMLERE</p>
      <div className='who-div-text'> 
     
        <div className='who-div-regt'>
           <p className='who-text-w'>DİYETİSY</p>
        </div>
       <p className='who-text-p'>EN DENİR</p>
      </div>
       <div className='who-circles'>
        <img src={circles} alt="" />
       </div>
       <div className='who-hr'></div>
    </div>
    <div className='who-div-image2'>
        <img src={strawberries} alt="" />
    </div>
    </div>
  )
}
