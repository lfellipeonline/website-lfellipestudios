import React, { useEffect, useState } from 'react'
import HomebarComponent from './components/Homebar/HomebarComponent'
import StartComponent from './components/Start/StartComponent'
import SobreComponent from './components/Sobre/SobreComponent'
import PortifolioComponent from './components/Portifolio/PortifolioComponent'
import TituloComponente from './components/Titulos/TituloComponente'
import TituloDireitaComponente from './components/Titulos/TituloDireitaComponente'
import ContatoComponente from './components/Contato/ContatoComponente'
import FooterComponente from './components/Footer/FooterComponente'


const App = () => {

  return (
    <div>
      <HomebarComponent />
      <StartComponent />
      <SobreComponent/>
        <div className="container portifolio-container">
          <TituloComponente titulo="Portifólio" texto="Descubra meus projetos mais recentes" />
          <PortifolioComponent />
        </div>
          <div className="container contato-container">
            <TituloComponente titulo="Contato" texto="Vamos Conversar"/>
            <ContatoComponente />
            <FooterComponente />
          </div>
    </div>
  )
}

export default App