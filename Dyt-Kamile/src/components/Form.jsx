import React from 'react'

export const Form = () => {
  return (
    <div>
        <h2>Diyet Formu</h2>
    <form className='formtype1'>
        <label>Ad-Soyad</label>
        <input  type="text" placeholder='Ad-Soyad giriniz' />

        <label>Doğum Tarihi</label>
        <input  type="date" placeholder='Doğum tarihinizi giriniz' />
        
        <div className='formtype2'>
            <label>Cinsiyet</label>
            <input type="radio" name="Erkek" placeholder='Erkek'/>
            <input type="radio" name="Kadın" placeholder='Kadın'/>

        </div>
        
    </form>
    </div>
  )
}
