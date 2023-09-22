import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../total/images/arrow-10.png'

export const Form2 = () => {
  return (
    <div>
        <h2>Diyet Formu</h2>
      <form className='form1'>
        <div className='formtype1'>
            <label>Son 5 yıl içinde en fazla kaç kilo oldunuz ve size göre nedeni?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Son 5 yıl içinde en az kaç kilo oldunuz ve size göre nedeni ?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />
        </div>
       
        <label className='seperate-label'>Diyet ya da zayıflamak için diğer yöntemleri denediniz mi?</label>
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

        <div className='formtype1'>
            <label>Ne tür yöntem ve diyetler uyguladınız?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Günde kaç öğün yemek yersiniz ?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Aralarda atıştırır mısınız, neler ?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Fast-food türü besinleri ne sıklıkta tüketirsiniz ?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Gün boyunca içtiğiniz su miktarı ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Kola/Diyet kola/Gazoz gibi gazlı içecekleri ne kadar sıklıkla tüketirsiniz?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Maden suyu/ soda ne sıklıkla tüketirsiniz?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Alkollü içecekleri ne sıklıkla tüketirsiniz?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Unlu yiyecek ekmek/simit ( hamur işleri) tüketim sıklığı ve gün boyu tüketilen ekmek miktarı ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Meyve tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Sebze-salata tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Kırmızı et tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Tavuk, hindi tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Balık tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Yumurta tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Kurubaklagil yemekleri tüketim sıklığı ve miktar ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Süt tüketim sıklığı ve miktarı ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Yoğurt/Ayran tüketim sıklığı ve miktarı ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Çay/Kahve/ Bitki çaylarını ne kadar sıklıkla tüketirsiniz?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Hazır meyve suları ne kadar sıklıkla tüketirsiniz?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Peynir tüketim sıklığı ve miktarı ne kadar?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Sevdiğiniz yemekler/ vazgeçemeyeceğiniz yemekler?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

            <label>Sevmediğiniz yemekler?</label>
            <input  type="text" placeholder='İstenilenleri giriniz' />

        </div>

      
      </form>
      <div className='buttons'>
      <button id='first'>Formu Temizle</button>
      
      <Link to='/form-3'>Sonraki</Link>
      <img src={arrow}/>
      
      </div>
    
    </div>
  )
}
