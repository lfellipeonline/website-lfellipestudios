import React, { useEffect, useState } from 'react'
import './HomebarComponent.css'
import logo from '../../assets/lfellipestudios.png'
import HomebarSVG from './HomebarSVG'
import { Link } from 'react-scroll'

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
            <li><button className='default-small-button'><Link to= "start" smooth={true} offset={0} duration={500}>Início</Link></button></li>
            <li><button className='default-small-button'><Link to= "sobre" smooth={true} offset={-90} duration={500}>Sobre</Link></button></li>
            
            <li><button className='default-small-button'><Link to= "portifolio" smooth={true} offset={-190} duration={500}>Portifólio</Link></button></li>
            <li><button className='default-small-button'><Link to= "contato" smooth={true} offset={0} duration={500}>Contato</Link></button></li>
            <button className='default-small-button svg-button'><HomebarSVG /></button>
        </ul>
    </nav>
  )
}

export default HomebarComponent