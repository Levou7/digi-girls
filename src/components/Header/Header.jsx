import React from 'react'
import './Header.scss'

import logo from '../../assets/img/logo.svg'

function Header() {
  return (
    <div>
        <div className="bg">
          <div className="header container">
            <div className="header-links">
              <div>
                <a href="#head"><img src={logo} alt="logo" />Girls in Digital</a>
              </div>
              <div>
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
          </div>
        </div>
    </div>
  )
}

export default Header