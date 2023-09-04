import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
export const Login = () => {
  return (
    <div className='login'>
         <div>
            <div className='desingLogin'><svg  xmlns="http://www.w3.org/2000/svg"  height="752" viewBox="0 0 1440 752" fill="none">
  <path d="M0 -37H1440V689L903.04 741.786C769.684 754.895 635.348 754.57 502.058 740.814L0 689V-37Z" fill="#F2DFF7" fill-opacity="0.87"/>
</svg></div>
            <div className='desingLogin'><svg  xmlns="http://www.w3.org/2000/svg"  height="752" viewBox="0 0 1440 752" fill="none">
  <path d="M-89 -59H1482V667.455L956.5 704.5L780.914 730.435C508.249 770.71 230.202 754.192 -35.7763 681.917L-89 667.455V-59Z" fill="#E5BEEB" fill-opacity="0.3"/>
</svg></div>
  

    </div>
    <About></About>
    <Contact></Contact>
    </div>
   
  )
}
