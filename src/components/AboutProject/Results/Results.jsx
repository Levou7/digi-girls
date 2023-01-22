import React, { useContext } from 'react'
import './Results.scss'

import { Context } from '../../../Context/Context'
import { result } from '../../../data/Links'

function Results() {
  const {lang} = useContext(Context)

  return (
    <div id='result1'>
      <div className="bgR">
        <div className="result1 container">
          <div className="result1-txt">
            <h2>{lang === 'Uz' ? 'Natijalar' : 'Результаты'}</h2>
            <p>{lang === 'Uz' ? 'Kutilayotgan natija: Malakali va raqobatbardosh kadrlar tayyorlash va qizlar o‘rtasida startap loyihalarini ishlab chiqish' : 'Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек'}</p>
          </div>
          <div className="result1-cards">
            {
              result?.map((e,i)=>(
                <div>
                  <img src={e.img} alt={e.id} />
                  <p>{e[`txt${lang ? lang : 'Ru'}`]}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results