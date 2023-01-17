import React from 'react'
import { Link } from 'react-router-dom'
import './Send.scss'

function Send() {
  return (
    <div className='send'>
        {
          !arguments.length ?
          <div className="succes">
            
            <h2>Успешно</h2>
            <Link to='/'>Home</Link>
          </div>
        :
        <div className="succes">
          <div className="success-checkmark">
              <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
              </div>
          </div>
          <h2>Неуспешно</h2>
          <Link to='/'>Home</Link>
        </div>
        }
    </div>
  )
}

export default Send