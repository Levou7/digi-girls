import React from 'react'
import { Link } from 'react-router-dom'
import './Registration.scss'

function Registration() {
  return (
    <div className='bgW'>
        <div className="regist container">
            <div className="regist-txt">
                <h2>Регистрация</h2>
            </div>
            <div className="regist-inp">
                <div className="regist-inp-left">
                    <p>Имя</p>
                    <input type="text"/>
                    <p>Дата рождения</p>
                    <input onKeyUp={(e)=> console.log(e.target.value)} type="number" placeholder='дд.мм.гггг'/>
                    <p>Адрес</p>
                    <input type="email"/>
                </div>
                <div className="regist-inp-right">
                    <p>Фамилия</p>
                    <input type="text"/>
                    <p>Почта</p>
                    <input type="email"/>
                    <p>Телефон</p>
                    <input type="tel"/>
                </div>
            </div>
            <div className="regist-btn">
                <Link to='/send'>Отправить</Link>
            </div>
        </div>
    </div>
  )
}

export default Registration