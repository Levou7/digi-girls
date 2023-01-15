import React from 'react'
import './Tasks.scss'

function Tasks() {
  return (
    <div>
        <section id='task'>
            <div className="bgT">
                <div className="tasks container">
                    <div className="tasks-txt">
                        <h2>Задачи</h2>
                    </div>
                    <div className="tasks-cards">
                        <div className='one'>
                            <p>Подбор рабочей группы</p>
                        </div>
                        <div className='two'>
                            <p>Установить контакт с партнерами</p>
                        </div>
                        <div className='three'>
                            <p>Закупка офисной техники</p>
                        </div>
                        <div className='four'>
                            <p>Привлечение опытных специалистов (зарубежные специалисты);</p>
                        </div>
                        <div className='five'>
                            <p>Разработка модуля</p>
                        </div>
                        <div className='six'>
                            <p>Освещение  проекта с помощью СМИ</p>
                        </div>
                        <div className='seven'>
                            <p>Проведение отбора участников</p>
                        </div>
                        <div className='eight'>
                            <p>Организация проекта в 4 этапа</p>
                        </div>
                        <div className='nine'>
                            <p>Организация форума и церемония награждения победителей</p> 
                        </div>
                        <div className='ten'>
                            <p>Мониторинг деятельности участников после окончание проекта</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Tasks