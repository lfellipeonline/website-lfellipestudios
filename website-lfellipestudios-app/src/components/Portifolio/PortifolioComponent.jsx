import React, { useRef } from 'react'
import './PortifolioComponent.css'
import noicon from "../../assets/portifolionoimage.png";

const PortifolioComponent = () => {

    const slider = useRef()
    let transformX = 0
  
    const slideForward = () => {
      if (transformX > -50) {
        transformX -=16.1
      }
      slider.current.style.transform = `translateX(${transformX}%)`
    }

    const slideBackward = () => {
      if (transformX < 0) {
        transformX +=16.1
      }
      slider.current.style.transform = `translateX(${transformX}%)`
    }
  
  return (
    <div className="portifolio">

        <button className='back-button' onClick={slideBackward}>◄</button>
        <button className='forward-button' onClick={slideForward}>►</button>
        
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto </span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="projectinfo">
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
                <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
          </ul>
          <button className='default-white-button more-button'>Ver Mais</button>
        </div>
    </div>
  )
}

export default PortifolioComponent