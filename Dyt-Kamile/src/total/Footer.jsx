import React from 'react';
import { Link } from 'react-router-dom';
import faceboook from '../total/images/ftfacebook.png'
import insta from '../total/images/insta.png'
import twitter from '../total/images/twitter.png'
import mail from '../total/images/mail.png'
import logo from '../total/images/logo.png'

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-title'>
                <h2>Dyt. Kamile</h2>
                <img src={logo} alt="" />
            </div>
            <div className='footer-link'>
                <Link to='/about'>Hakkımda</Link>
                <Link to='/contact'>İletişim</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/form'>Form</Link>
                <Link to='/paketler'>Paketler</Link>
                <Link to='/tarifler'>Tarifler</Link>
            </div>
            <div className='footer-bar'></div>
            <div className='footer-icons'>
                <div>
                    <img src={faceboook} alt="" />
                </div>
                <div>
                    <img src={insta} alt="" />
                </div>
                <div>
                    <img src={twitter} alt="" />
                </div>
                <div>
                    <img src={mail} alt="" />
                </div>

            </div>
            <div className='footer-end'>
                <p>© 2023 Maxxat Dev</p>
            </div>
        </div>
        
        
       
    </div>
  )
}
