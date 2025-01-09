import React from 'react'
import HomebarComponent from './components/Homebar/HomebarComponent'
import StartComponent from './components/Start/StartComponent'
import SobreComponent from './components/Sobre/SobreComponent'
import PortifolioComponent from './components/Portifolio/PortifolioComponent'
import TituloComponente from './components/Titulos/TituloComponente'

const App = () => {
  return (
    <div>
      <HomebarComponent />
      <StartComponent />
      <SobreComponent/>
      <div className="container">
        <TituloComponente titulo="Portifólio" texto="Descubra meus mais diversos projetos." />
      <PortifolioComponent />
      </div>
    </div>
  )
}

export default App