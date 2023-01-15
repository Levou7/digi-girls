import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Registration.scss'

function Registration() {
    const [val, setVal] = useState()
    const inpval = (e) => {
        e.preventDefault()
        const target = e.target
        setVal(target.ism.value)
    }
  return (
    <div className='bgW'>
        <div className="regist container">
            <div className="regist-txt">
                <h2>Регистрация</h2>
            </div>
            <form action="#" className="frm" onSubmit={inpval}>
                <div className="regist-inp">
                    <div className="regist-inp-left">
                        <p>Имя</p>
                        <input name='ism' type="text"/>
                        <p>Дата рождения</p>
                        <input name='data' type="number" placeholder='дд.мм.гггг'/>
                    </div>
                    <div className="regist-inp-right">
                        <p>Фамилия</p>
                        <input name='fam' type="text"/>
                        <p>Почта</p>
                        <input name='pochta' type="email"/>
                        <p>Телефон</p>
                        <input name='tel' type="tel"/>
                    </div>
                </div>
                <div className="regist-btn">
                    <button type='submit'>
                        <Link to='/send'>Отправить</Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration