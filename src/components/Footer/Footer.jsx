import React from 'react'
import './Footer.scss'

import logo from '../../assets/img/logo.svg'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
import youtube from '../../assets/img/youtube.png'
import facebook from '../../assets/img/facebook.png'

function Footer() {
  return (
    <div className='bgP'>
      <div className="footer container">
        <div className="footer-links">
          <div className='footer-links-left'>
            <img src={logo} alt="logo" />
            <b>Girls in digital</b>
          </div>
          <div className="footer-links-center">
            <p onClick={()=> {window.scrollTo(1,900)}}>О Проекте</p>
            <p onClick={()=> {window.scrollTo(1,1800)}}>Направления</p>
            <p onClick={()=> {window.scrollTo(1,4900)}}>Результаты</p>
            <p onClick={()=> {window.scrollTo(1,6000)}}>Контакты</p>
          </div>
          <div className="footer-links-right">
            <div className='firstChild'>
              <b>UZ</b>
              <b>РУ</b>
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