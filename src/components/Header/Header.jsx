import './Header.scss'

import logo from '../../assets/img/logo.svg'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { head, links } from '../../data/Links'

import hb from '../../assets/img/hBottom2.png';

function Header() {
  const {lang, setLang} = useContext(Context)

  const [lan, setLan] = useState('Ru')
  const selectLang = (e)=>{
    e.preventDefault()
    setLang(e.target.value)
    setLan(e.target.value)
    console.log(lang);
  }

  return (
    <section id='head'>
        <div className="bg">
          <div className="header container">
            <div className="header-links">
              <div className='header-links-left'>
                <a href="#head"><img src={logo} alt="logo" /></a>
                <a href="#head">Girls in Digital</a>
              </div>
              <div className="header-links-media" style={{display: 'none'}}>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-list"></i></button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <a href='#about'>{lang === 'Uz' ? 'Loyiha haqida' : 'О Проекте'}</a>
                    <a href='#task'>{lang === 'Uz' ? 'Masalalar' : 'Задачи'}</a>
                    <a href='#direct'>{lang === 'Uz' ? 'Yo`nalishlar' : 'Направления'}</a>
                    <a href='#result1'>{lang === 'Uz' ? 'Natijalar' : 'Результаты'}</a>
                    <a href='#contact'>{lang === 'Uz' ? 'Kontaktlar' : 'Контакты'}</a>
                    <div className='changer'>
                      <a href="#UZ" onClick={()=> setLang('Uz')} className={lang === 'Uz' ? 'active' : 'n'}>UZ</a>
                      <a href="#RU" onClick={()=> setLang('Ru')} className={lang === 'Ru' ? 'active' : 'n'}>RU</a>
                    </div>          
                  </div> 
                </div>
              </div>
              <div className='header-links-right'>
                  {
                    links?.map((e,i)=>(
                      <li key={i}>
                          <a href={e.href}>{e[`link${lan}`]}</a>
                      </li>
                    ))
                  }
                <select onChange={selectLang} style={{outline: 'none'}} name="s" id="select">
                  <option value="Ru">Ru</option>
                  <option value="Uz">Uz</option>
                </select>
                <button onClick={()=> {window.scrollTo(1,4200)}}>
                  {lang === 'Uz' ? 'Belgilanish' : 'Регистрация'}
                </button>
              </div>
            </div>
            <div className="header-bottom">
              <div className='header-bottom1'>
                <b>"Girls in digital"</b>
                {
                  head?.map((e,i)=>(
                    <>
                      <p key={i}>{e[`txt${lang ? lang : 'Ru'}`]}</p>
                      <button key={i}>{e[`btn${lang ? lang : 'Ru'}`]}</button>
                    </>
                  ))
                }
              </div>
              <div className='header-bottom2'>
                <p></p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Header