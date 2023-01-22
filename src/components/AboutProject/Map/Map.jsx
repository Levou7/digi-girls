import React, { useContext } from 'react'
import './Map.scss'

import { map } from '../../../data/Links'
import { Context } from '../../../Context/Context'

function Map() {
    const {lang} = useContext(Context)

  return (
    <div>
        <div className="map container">
            <div className="map-two">
                <div className="map-two-left">
                    {
                        map?.map((e,i)=> (
                            <div key={i} className='div-map'>
                                <div className="left">
                                    <img src={e.img} alt={e.id} />
                                </div>
                                <div className="right">
                                    <b>{e[`txt${lang ? lang : 'Ru'}`]}</b>
                                    <a className='href' href={e.hrefto}>{e[`to${lang ? lang : 'Ru'}`]}</a>
                                </div>
                            </div>
                        ))
                    }
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