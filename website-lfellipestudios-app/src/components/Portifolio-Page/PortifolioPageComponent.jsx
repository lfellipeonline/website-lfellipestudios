import React, { useRef } from 'react'
import styles from './PortifolioPageComponent.module.css'
import noicon from "../../assets/portifolionoimage.png";
import { useNavigate } from 'react-router-dom'

const PortifolioPageComponent = () => {

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

        <button className={styles.backButton} onClick={slideBackward}>◄</button>
        <button className={styles.forwardButton} onClick={slideForward}>►</button>
        
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="projectinfo" onClick={() => navigate('/materia')}>
                  <img src={noicon} alt="noicon" />
                  <div><h3>Titulo Limite do Projeto</h3>
                       <span>Subtitulo do Projeto</span>
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
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
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
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
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
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
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p> 
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
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p> 
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
                       <p>Descrição Detalhada do Projeto. Lorem Ipsum sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default PortifolioPageComponent