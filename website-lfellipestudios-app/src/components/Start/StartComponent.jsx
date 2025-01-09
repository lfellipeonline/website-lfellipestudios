import React from 'react'
import './StartComponent.css'
import { Link } from 'react-scroll'

const StartComponent = () => {
  return (
    <main className='start container'>
      <div className="start-text">
        <h1>Luiz Felipe</h1>
        <p>Design & Front-End</p>
        <button className='default-button'><Link to= "portifolio" smooth={true} offset={-190} duration={500}><h1>Explorar Conteúdo</h1></Link></button>
      </div>
    </main>
  )
}

export default StartComponent