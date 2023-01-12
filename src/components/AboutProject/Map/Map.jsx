import React from 'react'
import './Map.scss'

import chrome from '../../../assets/img/chrome.png'
import tel from '../../../assets/img/tel.png'
import email from '../../../assets/img/email.png'
import location from '../../../assets/img/location.png'

function Map() {
  return (
    <div>
        <div className="map container">
            <div className="map-two">
                <div className="map-two-left">
                    <div className='div-map'>
                        <div className="left">
                            <img src={chrome} alt="chrome" />
                        </div>
                        <div className="right">
                            <b>Веб сайт</b>
                            <p>digitalcity.uz</p>
                        </div>
                    </div>  
                    <div className='div-map'>
                        <div className="left">
                            <img src={tel} alt="tel" />
                        </div>
                        <div className="right">
                            <b>Телефон</b>
                            <p>+99874 222-22-22</p>
                        </div>
                    </div>
                    <div className='div-map'>
                        <div className="left">
                            <img src={email} alt="email" />
                        </div>
                        <div className="right">
                            <b>Почта</b>
                            <p>dcity@info.com</p>
                        </div>
                    </div>
                    <div className='div-map'>
                        <div className="left">
                            <img src={location} alt="location" />
                        </div>
                        <div className="right">
                            <b>Адресс</b>
                            <p className='w270'>улица Бобур Шох, Andizhan, Узбекистан</p>
                        </div>
                    </div>
                </div>
                <div className="map-two-right">
                <iframe title='ifream' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.6523998739916!2d72.35950656532252!3d40.747384480914164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1673528300352!5m2!1sru!2s" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map