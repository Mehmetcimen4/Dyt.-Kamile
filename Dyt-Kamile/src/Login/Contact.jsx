import React from 'react'
import face from '../total/images/group.png'
import insta from '../total/images/group2.png'
import wp from '../total/images/group3.png'
import linkedin from'../total/images/group4.png'

export const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-title-div'>
        <h3 className='contact-title'>İLETİŞİM</h3>
      </div>
      <div className='contact-form'>
        <form action="">
          <div className='contact-gap'> 
             <label className='contact-form-label' htmlFor="">Adınız</label>
        <input className='contact-input' type="text" placeholder="" />
        </div>
          <div className='contact-gap'>
            <label className='contact-form-label' htmlFor="">Soyadınız</label>
        <input className='contact-input' type="text" />
        </div>
          <div className='contact-gap'>
             <label className='contact-form-label' htmlFor="">Email</label>
        <input className='contact-input' type="email" placeholder=''/>
        </div>
          <div className='contact-gap'>
            <label className='contact-form-label' htmlFor="">Hangi hizmetle ilgileniyorsunuz</label>
        <select className='contact-input'>
          <option value="Herhangi birini şeçin">Herhangi birini şeçin</option>
          <option value=""></option>
        </select>
        </div>
          <div className='contact-gap'>
             <label className='contact-form-label' htmlFor="">Mesaj</label>
        <textarea className='contact-textarea' name="" id="" cols="30" rows="10"></textarea>
      
          </div>
       </form>
       
      </div>
      <div className='contact-icon-div'>
      <span>
        <img src={face} alt="" />
        </span>
      <span>
      <img src={insta} alt="" />
      </span>
      <span>
      <img src={wp} alt="" />
      </span>
      <span>
      <img src={linkedin} alt="" />
      </span>
      </div>
    </div>
  )
}
