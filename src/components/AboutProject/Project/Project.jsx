import React from 'react'
import './Project.scss'

import projectF from '../../../assets/img/projectF.png'
import projectS from '../../../assets/img/projectS.png'
import Aos from 'aos'

function Project() {
    Aos.init()

  return (
    <div>
        <section id='about'>
            <div className="project container">
                <h2>О проекте</h2>
                <div className="project-first">
                    <div>
                        <img src={projectF} alt="pf" />
                    </div>
                    <div>
                        <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
                    </div>
                </div>
                <div className="project-second">
                    <div>
                        <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.</p>
                    </div>
                    <div>
                        <img src={projectS} alt="ps" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Project