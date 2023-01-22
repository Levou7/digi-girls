import React, { useContext } from 'react'
import './Direction.scss'

import { direction } from '../../../data/Links'
import { Context } from '../../../Context/Context'

function Direction() {
    const {lang} = useContext(Context)

  return (
    <div className='center'>
        <section id='direct'>
            <div className="bgD">
                <div className="direction container">
                    <div className="direction-txt">
                        <b>{lang === 'Uz' ? 'Yo`nalishi' : 'Направлении'}</b>
                        <p>{lang === 'Uz' ? 'Loyiha yo`nalishlar bo`yicha amalga oshiriladi' : 'Проект будет проводится по направлениям'}</p>
                    </div>
                    <div className="direction-cards">
                        {
                            direction?.map((e,i)=>(
                                <div key={i} className={e.class}>
                                    <p>{e[`txt${lang ? lang : 'Ru'}`]}</p>
                                    <img src={e.img} alt={e.class} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="direction-btn">
                        <button>
                            {
                                lang === 'Uz' ? 'Yozilish' : 'Записаться'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Direction