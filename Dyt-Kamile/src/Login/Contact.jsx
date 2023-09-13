import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact-title-div'>
        <h3 className='contact-title'>İLETİŞİM</h3>
      </div>
      <div className='contact-form'>
        <form action="">
         <label className='contact-form-label' htmlFor="">Adınız</label>
        <input type="text" placeholder="" />
        <label className='contact-form-label' htmlFor="">Soyadınız</label>
        <input type="text" />
        <label className='contact-form-label' htmlFor="">Email</label>
        <input type="email" placeholder=''/>
        <label className='contact-form-label' htmlFor="">Hangi hizmetle ilgileniyorsunuz</label>
        <select>
          <option value="Herhangi birini şeçin">Herhangi birini şeçin</option>
          <option value=""></option>
        </select>
        <label className='contact-form-label' htmlFor="">Mesaj</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
       
      </div>
    </div>
  )
}
