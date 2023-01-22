import React, { useContext } from 'react'
import './Footer.scss'

import logo from '../../assets/img/logo.svg'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
import youtube from '../../assets/img/youtube.png'
import facebook from '../../assets/img/facebook.png'
import { Context } from '../../Context/Context'

function Footer() {
  const {lang, setLang} = useContext(Context)

  return (
    <div className='bgP' id='contact'>
      <div className="footer container">
        <div className="footer-links">
          <div className='footer-links-left'>
            <a href="#head"><img src={logo} alt="logo" /></a>
            <b>Girls in digital</b>
          </div>
          <div className="footer-links-center">
            <a href='#about'>{lang === 'Uz' ? 'Loyiha haqida' : 'О Проекте'}</a>
            <a href='#direct'>{lang === 'Uz' ? 'Yo`nalishlar' : 'Направления'}</a>
            <a href='#result1'>{lang === 'Uz' ? 'Natijalar' : 'Результаты'}</a>
            <a href='#contact'>{lang === 'Uz' ? 'Kontaktlar' : 'Контакты'}</a>
          </div>
          <div className="footer-links-right">
            <div className='firstChild'>
              <b className={lang === 'Uz' ? 'active' : ''} onClick={()=> setLang('Uz')}>UZ</b>
              <b className={lang === 'Ru' ? 'active' : ''} onClick={()=> setLang('Ru')}>РУ</b>
            </div>
            <div>
              <img src={instagram} alt="instaram" />
              <img src={telegram} alt="telegram" />
              <img src={youtube} alt="youtube" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer