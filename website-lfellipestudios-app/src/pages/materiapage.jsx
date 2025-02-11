import React, { useEffect } from 'react';
import './MateriaPage.css'

import TituloComponente from '../components/Titulos/TituloComponente'
import HomebarMateriaComponent from '../components/Materia/Homebar Materia/HomebarMateriaComponent'
import HeaderComponent from '../components/Materia/Header/HeaderComponent'
import BodyComponent from '../components/Materia/Body/BodyComponent'

const MateriaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container materia-container">
        <HomebarMateriaComponent />
        <HeaderComponent />
        <BodyComponent  />
    </div>
  )
}

export default MateriaPage