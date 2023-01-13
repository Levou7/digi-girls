import React, { useState } from 'react'
import './Header.scss'

import logo from '../../assets/img/logo.svg'

function Header() {

  const [open, setOpen] = useState('')

  return (
    <div>
        <div className="bg">
          <div className="header container">
            <div className="header-links">
              <div className='header-links-left'>
                <a href="#head"><img src={logo} alt="logo" /></a>
                <a href="#head">Girls in Digital</a>
              </div>
              <div className="header-links-media">
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <section className="top-nav">
                  <input id="menu-toggle" type="checkbox" />
                  <label className='menu-button-container' htmlFor="menu-toggle">
                  <div className='menu-button'></div>
                </label>
                  <ul className="menu">
                    <li><a href="#about" onClick={()=> {window.scrollTo(1,900)}}>О проекте</a></li>
                    <li><a href="#direct" onClick={()=> {window.scrollTo(1,1800)}}>Направления</a></li>
                    <li><a href="#task" onClick={()=> {window.scrollTo(1,3500)}}>Задачи</a></li>
                    <li><a href="#result" onClick={()=> {window.scrollTo(1,4900)}}>Результаты</a></li>
                    <li><a href="#contact" onClick={()=> {window.scrollTo(1,6000)}}>Контакты</a></li>
                  </ul>
                </section>
              </div>
              <div className='header-links-right'>
                <a href="#about" onClick={()=> {window.scrollTo(1,900)}}>О проекте</a>
                <a href="#direct" onClick={()=> {window.scrollTo(1,1800)}}>Направления</a>
                <a href="#task" onClick={()=> {window.scrollTo(1,3500)}}>Задачи</a>
                <a href="#result" onClick={()=> {window.scrollTo(1,4900)}}>Результаты</a>
                <a href="#contact" onClick={()=> {window.scrollTo(1,6000)}}>Контакты</a>
                <select name="s" id="select">
                  <option value="РУ">РУ</option>
                  <option value="UZ">UZ</option>
                </select>
                <button onClick={()=> {window.scrollTo(1,4200)}}>
                  Регистрация
                </button>
              </div>
            </div>
            <div className="header-bottom">
              <div>
                <b>"Girls in digital"</b>
                <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
                <button>
                  Подробнее
                </button>
              </div>
            </div>
            <div style={{display: 'none'}} className="header-bottom-media">
              <div className="left">
                <b>“Girls in digital”</b>
                <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
                <button>Подробнее</button>
              </div>
              <div className="right">

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header