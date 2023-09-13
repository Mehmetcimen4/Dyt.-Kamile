import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-title'>
                <h2>Dyt Kamile</h2>
                <img src="" alt="" />  
            </div>
            <div className='footer-link'>
                <Link to='/about'>Hakkımda</Link>
                <Link to='/contact'>İletişim</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/form'>Form</Link>
                <Link to='/paketler'>Paketler</Link>
                <Link to='/tarifler'>Tarifler</Link>
            </div>
            <div className='footer-icons'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
        
        
       
    </div>
  )
}
