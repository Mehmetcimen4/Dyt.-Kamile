import React from 'react'
// import '../Form.css'

export const Form = () => {
  return (
    <div>
        <h2>Diyet Formu</h2>
    <form className='form1'>
        <div className='formtype1'>
            <label>Ad-Soyad</label>
            <input  type="text" placeholder='Ad-Soyad giriniz' />

            <label>Doğum Tarihi</label>
            <input  type="date" placeholder='Doğum tarihinizi giriniz' />
        </div>
       
        <label className='seperate-label'>Cinsiyet</label>
        <div className='formtype2'>
            <div className='radio1'>
              <input type="radio" name="Erkek" placeholder='Erkek'/>
              <label>Erkek</label>
            </div>
            <div className='radio1'>
              <input type="radio" name="Kadın" placeholder='Kadın'/>
              <label>Kadın</label>
            </div>
        </div>

        <div className='formtype1'>
            <label>Boyunuz</label>
            <input  type="text" placeholder='Boyunuzu giriniz cm cinsinden' />

            <label>Hedef Kilonuz</label>
            <input  type="text" placeholder='Hedef kilonuzu giriniz' />

            <label>Mevcut Kilonuz</label>
            <input  type="text" placeholder='Mevcut kilonuzu giriniz' />

            <label>Bel çevreniz</label>
            <input  type="text" placeholder='Bel çevrenizi giriniz' />

            <label>Yaşadığınız Şehir</label>
            <input  type="text" placeholder='Yaşadığınız şehiri giriniz' />

            <label>Telefon Numaranız</label>
            <input  type="text" placeholder='Yaşadığınız şehiri giriniz' />

            <label>Mesleğiniz</label>
            <input  type="text" placeholder='Yaşadığınız şehiri giriniz' />
        </div>

        <label className='seperate-label'>Evli misiniz?</label>
        <div className='formtype2'>
          <div className='radio1'>
            <input type="radio" name="Evet"/>
            <label>Evet</label>
          </div>
          <div className='radio1'>
            <input type="radio" name="Hayır"/>
            <label>Hayır</label>
          </div>
        </div>

       

        
        
    </form>
    </div>
  )
}
