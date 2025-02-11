import React, { useEffect } from 'react';
import './MateriaPage.css'

import TituloComponente from '../components/Titulos/TituloComponente'
import HomebarMateriaComponent from '../components/Materia/Homebar Materia/HomebarMateriaComponent'
import HeaderComponent from '../components/Materia/Header/HeaderComponent'
import BodyComponent from '../components/Materia/Body/BodyComponent'
import FooterComponente from '../components/Footer/FooterComponente';

const MateriaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="container materia-container">
        <HomebarMateriaComponent />
        <HeaderComponent titulo={"Teste de Titulo"} subtitulo={"Teste de Subtitulo"} autor={"lfellipeonline"} dataPublicacao={"11/02/2025"} preTexto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>

        <BodyComponent  paragrafoUm={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} paragrafoDois={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        <FooterComponente />
      </div>
    </div>
  )
}

export default MateriaPage