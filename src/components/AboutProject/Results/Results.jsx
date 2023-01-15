import React from 'react'
import './Results.scss'

import codeR from '../../../assets/img/codeR.png'
import pasport from '../../../assets/img/pasport.png'
import money from '../../../assets/img/money.png'
import rocket from '../../../assets/img/rocket.png'
import rulet from '../../../assets/img/rulet.png'

function Results() {
  return (
    <div id='result'>
      <div className="bgR">
        <div className="result container">
          <div className="result-txt">
            <h2>Результаты</h2>
            <p>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
          </div>
          <div className="result-cards">
            <div>
              <img src={codeR} alt="codeR" />
              <p>Самореализация девушек в сфере IT</p>
            </div>
            <div>
              <img src={pasport} alt="pasport" />
              <p>Выбор профессии без квалификациии дипломов</p>
            </div>
            <div>
              <img src={money} alt="money" />
              <p>Возможность зарабатывать дистанционно (фриланс)</p>
            </div>
            <div>
              <img src={rocket} alt="rocket" />
              <p>Возможность начать свои социальные проекты в виде Старт апов</p>
            </div>
            <div>
              <img src={rulet} alt="rulet" />
              <p>Маркетинговые навыки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results