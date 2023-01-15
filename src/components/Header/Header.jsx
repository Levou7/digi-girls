import './Header.scss'

import logo from '../../assets/img/logo.svg'

function Header() {

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
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-list"></i></button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <a href="#about">О проекте</a>
                    <a href="#direct">Направления</a>
                    <a href="#task">Задачи</a>
                    <a href="#result">Результаты</a>
                    <a href="#contact">Контакты</a>
                    <div className='changer'>
                      <a href="#UZ">UZ</a>
                      <a href="#RU">RU</a>
                    </div>          
                  </div>
                </div>
              </div>
              <div className='header-links-right'>
                <a href="#about">О проекте</a>
                <a href="#direct">Направления</a>
                <a href="#task">Задачи</a>
                <a href="#result">Результаты</a>
                <a href="#contact">Контакты</a>
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