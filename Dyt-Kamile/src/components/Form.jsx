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

        
        
    </form>
    </div>
  )
}
