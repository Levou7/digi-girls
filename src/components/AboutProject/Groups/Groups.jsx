import React from 'react'
import './Groups.scss'

import groupF from '../../../assets/img/groupF.png'
import groupS from '../../../assets/img/groupS.png'

function Groups() {
  return (
    <div>
        <div className="groups container">
          <div className="groups-first">
            <div>
              <img src={groupF} alt="gF" />
            </div>
            <div>
              <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
            </div>
          </div>
          <div className="groups-second">
            <div>
              <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте.</p>
            </div>
            <div>
              <img src={groupS} alt="gS" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Groups