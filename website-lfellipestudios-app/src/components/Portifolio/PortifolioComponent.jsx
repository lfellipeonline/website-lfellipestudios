import React, { useRef } from 'react'
import './PortifolioComponent.css'
import noicon from "../../assets/portifolionoimage.png";
import { useNavigate } from 'react-router-dom'

const PortifolioComponent = () => {

  const navigate = useNavigate()

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
                <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
              <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto </span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
              <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
              <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
              <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
              <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span> 
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>
          <button className='default-white-button more-button'><a href="/portifolio">Ver Mais</a></button>
    </div>
  )
}

export default PortifolioComponent