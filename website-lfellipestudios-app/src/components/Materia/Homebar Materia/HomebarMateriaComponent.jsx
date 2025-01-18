import React, { useEffect, useState } from 'react'
import './HomebarMateriaComponent.css'
import logo from '../../../assets/lfellipestudios.png'
import HomebarSVG from './HomebarMateriaSVG'
import { Link } from 'react-scroll'

const HomebarMateriaComponent = () => {

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
            <li><button className='default-small-button'><a href="/portifolio">Portifólio</a></button></li>
            <li><button className='default-small-button'><a href="/">Voltar Ao Início</a></button></li>
            <button className='default-small-button svg-button'><HomebarSVG /></button>
        </ul>
    </nav>
  )
}

export default HomebarMateriaComponent