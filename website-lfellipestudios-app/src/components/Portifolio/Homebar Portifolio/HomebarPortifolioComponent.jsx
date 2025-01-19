import React, { useEffect, useState } from 'react'
import './HomebarPortifolioComponent.css'
import logo from '../../../assets/lfellipestudios.png'
import HomebarSVG from './HomebarPortifolioSVG'
import { Link } from 'react-scroll'

const HomebarPortifolioComponent = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  


  return (
    <nav className={`container ${sticky ? 'homebar-shadow' : ''}`}>
        <a href="/"><img src={logo} alt="lfellipestudios logo" className='logo' /></a>
        <ul className='nav-list'>
            <li><button className='default-small-button'><a href="/">Voltar Ao Início</a></button></li>
            <button className='default-small-button svg-button'><HomebarSVG /></button>
        </ul>
    </nav>
  )
}

export default HomebarPortifolioComponent