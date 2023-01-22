import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { registinp1, registinp2 } from '../../../data/Links'
import './Registration.scss'

function Registration() {
  const {lang} = useContext(Context)
  return (
    <div className='bgW'>
        <div className="regist container">
            <div className="regist-txt">
                <h2>{lang === 'Uz' ? 'Ro`yxatdan o`tish' : 'Регистрация'}</h2>
            </div>
            <form action="#" className="frm">
                <div className="regist-inp">
                    <div className="regist-inp-left">
                        {
                            registinp1?.map((e,i)=>(
                                <div key={i}>
                                    <p>{e[`namee${lang ? lang : 'Ru'}`]}</p>
                                    <input type={e.type}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="regist-inp-right">
                        {
                            registinp2?.map((e,i)=>(
                                <div key={i}>
                                    <p>{e[`namee${lang ? lang : 'Ru'}`]}</p>
                                    <input type={e.type}/> 
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="regist-btn">
                    <button type='submit'>
                        <Link to='/send'>{lang === 'Uz' ? 'Jo`natish' : 'Отправить'}</Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration