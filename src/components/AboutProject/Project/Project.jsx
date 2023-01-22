import React, { useContext } from 'react'
import './Project.scss'

import projectF from '../../../assets/img/projectF.png'
import projectS from '../../../assets/img/projectS.png'
import Aos from 'aos'
import { Context } from '../../../Context/Context'
import { project } from '../../../data/Links'

function Project() {
    const {lang} = useContext(Context)

    Aos.init()

  return (
    <div>
        <section id='about'>
            <div className="project container">
                {
                    project?.map((e,i)=> (
                        <h2 key={i}>{e[`title${lang ? lang : 'Ru'}`]}</h2>
                    ))
                }
                <div data-aos='flip-up' className="project-first">
                    <div>
                        <img src={projectF} alt="pf" />
                    </div>
                    <div>
                        {
                            project?.map((e,i)=> (
                                <p key={i}>{e[`txt1${lang ? lang : 'Ru'}`]}</p>
                            ))
                        }
                    </div>
                </div>
                <div data-aos='flip-up' className="project-second">
                    <div>
                        {
                            project?.map((e,i)=> (
                                <p key={i}>{e[`txt2${lang ? lang : 'Ru'}`]}</p>
                            ))
                        }
                    </div>
                    <div>
                        <img src={projectS} alt="ps" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Project