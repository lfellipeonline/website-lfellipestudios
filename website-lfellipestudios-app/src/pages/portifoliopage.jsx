import React from 'react'
import HomebarComponent from '../components/Homebar/HomebarComponent'
import PortifolioPageComponent from '../components/Portifolio-Page/PortifolioPageComponent'
import TituloDireitaComponente from '../components/Titulos/TituloDireitaComponente'
import TituloComponente from '../components/Titulos/TituloComponente'
import './PortifolioPage.css'
import FooterComponente from '../components/Footer/FooterComponente'
import HomebarPortifolioComponent from '../components/Portifolio/Homebar Portifolio/HomebarPortifolioComponent'
import StarsBackgroundVideo from '../assets/starsvideobackground.mp4'

const PortifolioPage = () => {
  return (
    <div>
        <div className="background-video">
        <video src={StarsBackgroundVideo} autoPlay loop muted></video>
        </div>
        <div className="container portifolio-page-container">
        
        <TituloComponente 
        titulo="Portifólio" 
        texto={
        <>
        Descubra meus projetos.
        </>
        } 
/>
        <HomebarPortifolioComponent />
        <TituloDireitaComponente titulo="Projetos Recentes" texto="Meus projetos mais recentes." />
        <PortifolioPageComponent />
        <TituloDireitaComponente titulo="Projetos UNINASSAU" texto="Meus Projetos da UNINASSAU." />
        <PortifolioPageComponent />
        <TituloDireitaComponente titulo="Design Gráfico" texto="Projetos de Design Gráfico e Fotografia." />
        <PortifolioPageComponent />
        <TituloDireitaComponente titulo="Edição de Vídeos" texto="Projetos de Edição de Vídeo e Filmagem" />
        <PortifolioPageComponent />
        </div>
        <div className="container">
        <FooterComponente />
        </div>
        
        
        
    </div>
  )
}

export default PortifolioPage
