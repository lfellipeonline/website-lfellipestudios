import React from 'react'
import './MateriaPage.css'

import TituloComponente from '../components/Titulos/TituloComponente'
import HomebarMateriaComponent from '../components/Materia/Homebar Materia/HomebarMateriaComponent'
import HeaderComponent from '../components/Materia/Header/HeaderComponent'
import BodyComponent from '../components/Materia/Body/BodyComponent'

const MateriaPage = () => {
  return (
    <div className="container materia-container">
        <HomebarMateriaComponent />
        <HeaderComponent />
        <BodyComponent  />
    </div>
  )
}

export default MateriaPage