import React from 'react'
import { Link } from 'react-router-dom'
import './Send.scss'

function Send() {
  return (
    <div className='send'>
        <div className="succes">
          <div class="success-checkmark">
              <div class="check-icon">
                  <span class="icon-line line-tip"></span>
                  <span class="icon-line line-long"></span>
                  <div class="icon-circle"></div>
                  <div class="icon-fix"></div>
              </div>
          </div>
          <h2>Успешно</h2>
          <Link to='/about'>Home</Link>
        </div>
    </div>
  )
}

export default Send