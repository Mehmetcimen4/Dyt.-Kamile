import React from 'react'
import circles from '../total/images/circles.png'
export const Who = () => {
  return (
    <div className='who-div'>
    <div className='who-div-image1'>
      <div className='who-div-text'>
        <div className='who-div-regt'></div>
        <p className='who-text-w'>DİYETİSY</p><p className='who-text-p'>EN DENİR</p>
      </div>
       <div className='who-circles'>
        <img src={circles} alt="" />
       </div>
    </div>
    <div className='who-div-image2'>
        
    </div>
    </div>
  )
}
