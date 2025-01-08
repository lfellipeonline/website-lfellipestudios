import React, { useEffect, useState } from 'react'
import './HomebarComponent.css'
import logo from '../../assets/lfellipestudios.png'
import HomebarSVG from './HomebarSVG'
const HomebarComponent = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'homebar-shadow' : ''}`}>
        <img src={logo} alt="lfellipestudios logo" className='logo' />
        <ul className='nav-list'>
            <li><button className='default-small-button'>Início</button></li>
            <li><button className='default-small-button'>Sobre</button></li>
            <li><button className='default-small-button'>Portifólio</button></li>
            <li><button className='default-small-button'>Contato</button></li>
            <button className='default-small-button svg-button'><HomebarSVG /></button>
        </ul>
    </nav>
  )
}

export default HomebarComponent