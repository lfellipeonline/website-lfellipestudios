import React from 'react'
import HomebarComponent from '../components/Homebar/HomebarComponent'
import PortifolioPageComponent from '../components/Portifolio-Page/PortifolioPageComponent'
import TituloDireitaComponente from '../components/Titulos/TituloDireitaComponente'
import TituloComponente from '../components/Titulos/TituloComponente'
import './PortifolioPage.css'
import FooterComponente from '../components/Footer/FooterComponente'
import HomebarPortifolioComponent from '../components/Portifolio/Homebar Portifolio/HomebarPortifolioComponent'

const PortifolioPage = () => {
  return (
    <div>
        <div className="container portifolio-page-container">
        <TituloComponente 
        titulo="Portifólio" 
        texto={
        <>
        Conheça meus projetos.<br /> <br />
        <i>(Página em construção, design subjetivo a mudanças)</i>
        </>
        } 
/>
        <HomebarPortifolioComponent />
        <TituloDireitaComponente titulo="Projetos Recentes" texto="Descubra meus projetos mais recentes." />
        <PortifolioPageComponent />
        <TituloDireitaComponente titulo="Projetos UNINASSAU" texto="Meus Projetos da UNINASSAU." />
        <PortifolioPageComponent />
        <TituloDireitaComponente titulo="Design Gráfico" texto="Projetos de Design Gráfico e Fotografia." />
        <PortifolioPageComponent />
        </div>
        <div className="container">
        <FooterComponente />
        </div>
        
        
        
    </div>
  )
}

export default PortifolioPage
