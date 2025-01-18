import React, { useState } from 'react';
import './HeaderComponent.css';
import TituloComponente from '../../Titulos/TituloComponente';
import TitleImage from '../../../assets/portifolionoimage.png';
import ShareIcon from '../../../assets/shareicon.png';

const HeaderComponent = () => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setError(false)
      })
      .catch(() => {
        setError(true);
        setCopied(false);
      });
  };

  return (
    <div className="header container">
      <div className="header-text-wrapper">
        <TituloComponente titulo="Titulo da Matéria" texto="Subtítulo da Matéria" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <span className="header-info">
          Por: lfellipeonline <br />
          Publicado em: 18/01/2025
        </span>
        <div className="wrapper-button">
          <button className='default-white-button' onClick={handleShareClick}>
            <img src={ShareIcon} alt="Ícone de Compartilhamento" />
          </button>
          {copied && <span className="success-message">Link Copiado!</span>}
          {error && <span className="error-message">Erro ao copiar o link.</span>}
        </div>
      </div>
      <div className="header-wrapper">
        <img src={TitleImage} alt="Imagem de Título" />
      </div>
    </div>
  );
};

export default HeaderComponent;
