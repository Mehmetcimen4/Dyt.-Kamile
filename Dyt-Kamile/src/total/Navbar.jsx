import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='navbar-bar'>
            <Link className='navbar-logo' to='/'><p className='navbar-logo-style'>Dyt. Kamile</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="39" viewBox="0 0 47 39" fill="none">
  <path d="M2.23276 29.4581C4.40548 29.9347 6.15455 29.144 8.56841 28.0184H8.56804C7.89602 26.0845 7.35406 24.1079 6.945 22.1017C4.51553 23.7876 -2.37494 27.9191 2.23286 29.4582L2.23276 29.4581Z" fill="#32794F"/>
  <path d="M9.27507 27.6629C18.0921 21.9507 29.8317 18.8511 40.1193 21.9664C42.7373 9.67231 36.0931 4.74026 27.0295 6.99171C25.9455 8.02309 26.4692 12.0443 24.1705 12.2905C21.4006 12.0706 21.8459 10.1649 22.1965 7.36355C19.8837 6.60559 17.8138 6.31061 16.0039 6.41766C18.256 12.8766 16.0039 16.314 7.17918 17.44C7.16952 20.4511 7.84949 23.9249 9.27497 27.663L9.27507 27.6629Z" fill="url(#paint0_linear_428_20)"/>
  <path d="M29.1398 28.396C22.3334 28.4431 16.7363 31.5847 12.181 34.1136C15.3542 40.1716 20.234 39.0405 23.9198 37.3441C30.2028 40.4858 34.559 38.5954 38.0203 29.1867C35.0937 28.6312 32.1193 28.3664 29.1401 28.396H29.1398Z" fill="url(#paint1_linear_428_20)"/>
  <path d="M24.1703 11.5045C24.4738 11.5045 24.7255 11.4103 24.7934 11.1798C26.5527 3.2058 30.3646 2.37853 30.3646 2.37853L28.2704 0.25293C22.1912 2.59843 21.5842 12.2955 24.1703 11.5045Z" fill="#0A6835"/>
  <path d="M40.3185 24.3531C40.3185 24.57 40.1425 24.7457 39.9259 24.7457C39.7089 24.7457 39.5329 24.57 39.5329 24.3531V22.6303C38.4858 22.3947 37.3809 22.18 36.187 22.0072C36.0665 22.3684 36.5168 24.3111 35.7944 24.2585C35.0614 24.3213 35.5223 22.2479 35.4018 21.8969C34.2078 21.7504 32.9358 21.6405 31.5899 21.5828C31.4748 21.944 31.9251 23.913 31.1973 23.8603C30.4748 23.918 30.9252 21.902 30.8046 21.5514V21.5517C29.7079 21.524 28.6103 21.5521 27.5165 21.6354C27.3543 21.9864 27.9146 25.5937 27.1239 25.4838C26.328 25.6043 26.8883 22.0385 26.7312 21.7088C25.6056 21.8293 24.4898 22.0251 23.3905 22.2953V24.1174C23.3905 24.334 23.2149 24.51 22.9979 24.51C22.781 24.51 22.6053 24.334 22.6053 24.1174V22.4944C21.5914 22.7683 20.5918 23.0933 19.6104 23.4681V25.7927C19.6104 26.0097 19.4344 26.1853 19.2178 26.1853C19.0009 26.1853 18.8248 26.0097 18.8248 25.7927V23.73C17.678 24.196 16.5838 24.6985 15.5367 25.2168V27.437C15.5367 27.6539 15.361 27.8296 15.1441 27.8296C14.9271 27.8296 14.7514 27.6539 14.7514 27.437V25.6357C13.631 26.2116 12.6101 26.7668 11.5627 27.3322V29.2065C11.5627 29.4235 11.387 29.5992 11.1701 29.5992C10.9531 29.5992 10.7774 29.4235 10.7774 29.2065V27.7512C9.85085 28.2486 8.9659 28.704 8.11235 29.0967V32.6883C6.93409 34.5681 7.40564 29.7249 7.32712 29.4422C6.38661 29.8563 5.39796 30.1503 4.38444 30.3165C4.26939 30.6726 4.70913 32.5576 3.99182 32.5105C3.2851 32.5576 3.70913 30.7355 3.5992 30.3849H3.59883C2.56483 30.4444 1.53822 30.1752 0.666811 29.615C-1.18166 47.1086 16.8982 26.1854 29.1137 27.6095C37.3972 27.489 44.0053 29.7351 47 31.2224V25.2433C46.0884 24.7896 45.1534 24.3839 44.1991 24.0285V25.3846C44.1991 25.6016 44.023 25.7772 43.8061 25.7772C43.5895 25.7772 43.4135 25.6016 43.4135 25.3846V23.7302C42.4869 23.411 41.4449 23.0914 40.2717 22.8036L40.3185 24.3531Z" fill="#0A6835"/>
  <defs>
    <linearGradient id="paint0_linear_428_20" x1="23.9372" y1="6.39642" x2="23.8863" y2="37.1163" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DC2F39"/>
      <stop offset="0.459913" stop-color="#DC2F39" stop-opacity="0.77"/>
      <stop offset="1" stop-color="#DC2F39" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_428_20" x1="25.1007" y1="28.3937" x2="25.1007" y2="38.7471" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DC2F39" stop-opacity="0.76"/>
      <stop offset="0.563969" stop-color="#DC2F39" stop-opacity="0.603917"/>
      <stop offset="1" stop-color="#DC2F39" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
</svg>
            </Link>
            <Link className='navbar-abcon' to='/#about'>Hakkımda</Link>
            <Link className='navbar-abcon' to='/#contact'>İletişim</Link>
        </nav>
    </div>
  )
}
