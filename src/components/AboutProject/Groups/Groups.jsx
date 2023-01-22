import React, { useContext } from 'react'
import './Groups.scss'

import { groups } from '../../../data/Links'
import { Context } from '../../../Context/Context'

function Groups() {
  const {lang} = useContext(Context)

  return (
    <div>
        <div className="groups container">
          {
            groups?.map((e,i)=>(
              <div key={i} data-aos='fade-up' data-aos-duration="5000" className={e.class}>
                <div>
                  <img src={e.img} alt={e.class} />
                </div>
                <div>
                  <p>{e[`txt${lang ? lang : 'Ru'}`]}</p>
                </div>
              </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default Groups