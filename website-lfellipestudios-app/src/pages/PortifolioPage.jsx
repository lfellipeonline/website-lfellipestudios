import React from 'react'
import HomebarComponent from '../components/Homebar/HomebarComponent'
import PortifolioPageComponent from '../components/Portifolio-Page/PortifolioPageComponent'
import TituloDireitaComponente from '../components/Titulos/TituloDireitaComponente'
import TituloComponente from '../components/Titulos/TituloComponente'
import './portifoliopage.css'
import FooterComponente from '../components/Footer/FooterComponente'

const PortifolioPage = () => {
  return (
    <div>
        <div className="container portifolio-page-container">
        <div className="portifolio-alert"><span>Página em construção <br />Design subjetivo a mudanças</span></div>
        <HomebarComponent />
        <TituloComponente titulo="Projetos Recentes" texto="Descubra meus projetos mais recentes" />
        <PortifolioPageComponent />
        <TituloComponente titulo="Projetos UNINASSAU" texto="Meus Projetos da UNINASSAU" />
        <PortifolioPageComponent />
        <TituloComponente titulo="Design Gráfico" texto="Projetos que envolvem Design Gráfico e Fotografia" />
        <PortifolioPageComponent />
        </div>
        <div className="container">
        <FooterComponente />
        </div>
        
        
        
    </div>
  )
}

export default PortifolioPage