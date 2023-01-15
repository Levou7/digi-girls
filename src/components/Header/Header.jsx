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
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-list"></i></button>
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <a href="#about">О проекте</a>
                    <a href="#direct">Направления</a>
                    <a href="#task">Задачи</a>
                    <a href="#result">Результаты</a>
                    <a href="#contact">Контакты</a>
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