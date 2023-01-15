import React from 'react'
import './Direction.scss'

import rul from '../../../assets/img/rul.png'
import house from '../../../assets/img/house.png'
import statue from '../../../assets/img/statue.png'
import van from '../../../assets/img/van.png'
import code from '../../../assets/img/code.png'
import gallery from '../../../assets/img/gallery.png'

function Direction() {
  return (
    <div className='center'>
        <section id='direct'>
            <div className="bgD">
                <div className="direction container">
                    <div className="direction-txt">
                        <b>Направлении</b>
                        <p>Проект будет проводится по направлениям</p>
                    </div>
                    <div className="direction-cards">
                        <div className="first">
                            <p>SMM и Таргетинг, копирайтинг</p>
                            <img src={rul} alt="rul" />
                        </div>
                        <div className="second">
                            <p>3D <br /> дизайн.</p>
                            <img src={house} alt="house" />
                        </div>
                        <div className="third">
                            <p>Графический <br /> дизайн</p>
                            <img src={statue} alt="statue" />
                        </div>
                        <div className="fourth">
                            <p className='br'>Логистика</p>
                            <img src={van} alt="van" />
                        </div>
                        <div className="fivth">
                            <p>Программиро- <br />вание</p>
                            <img src={code} alt="code" />
                        </div>
                        <div className="sixth">
                            <p>Айти <br /> менеджмент</p>
                            <img src={gallery} alt="gallery" />
                        </div>
                    </div>
                    <div className="direction-btn">
                        <button>
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Direction