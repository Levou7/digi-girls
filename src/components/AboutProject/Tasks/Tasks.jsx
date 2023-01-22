import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import { tasks } from '../../../data/Links'
import './Tasks.scss'

function Tasks() {
    const {lang} = useContext(Context)

  return (
    <div>
        <section id='task'>
            <div className="bgT">
                <div className="tasks container">
                    <div className="tasks-txt">
                        <h2>{lang === 'Uz' ? 'Masalalar' : 'Задачи'}</h2>
                    </div>
                    <div className="tasks-cards">
                        {
                            tasks?.map((e,i)=> (
                                <div key={i} className={e.class}>
                                    <p>{e[`txt${lang ? lang : 'Ru'}`]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Tasks