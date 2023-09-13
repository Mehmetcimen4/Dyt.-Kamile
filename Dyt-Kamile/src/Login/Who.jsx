import React from 'react'
import circles from '../total/images/circles.png'
export const Who = () => {
  return (
    <div className='who-div'>
    <div className='who-div-image1'>
      <div className='who-div-text'>
        <div className='who-div-regt'>
           <p className='who-text-w'>DİYETİSYEN</p>
        </div>
       <p className='who-text-p'>KİMLERE DENİR</p>
      </div>
       <div className='who-circles'>
        <img src={circles} alt="" />
       </div>
       <div className='who-hr'></div>
    </div>
    <div className='who-div-image2'>
        
    </div>
    </div>
  )
}
