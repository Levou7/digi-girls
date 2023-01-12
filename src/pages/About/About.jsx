import React from 'react'
import Direction from '../../components/AboutProject/Direction/Direction'
import Groups from '../../components/AboutProject/Groups/Groups'
import Map from '../../components/AboutProject/Map/Map'
import Project from '../../components/AboutProject/Project/Project'
import Registration from '../../components/AboutProject/Registration/Registration'
import Results from '../../components/AboutProject/Results/Results'
import Tasks from '../../components/AboutProject/Tasks/Tasks'
import './About.scss'

function About() {
  return (
    <div className='About'>
        <Project/>
        <Direction/>
        <Groups/>
        <Tasks/>
        <Registration/>
        <Results/>
        <Map/>
    </div>
  )
}

export default About