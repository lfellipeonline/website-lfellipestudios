import React, { useState } from 'react';
import './HeaderComponent.css';
import TituloComponente from '../../Titulos/TituloComponente';
import TitleImage from '../../../assets/portifolionoimage.png';
import ShareIcon from '../../../assets/shareicon.png';

const HeaderComponent = ({ titulo, subtitulo, autor, dataPublicacao, preTexto, imagemTitulo }) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setCopied(false);
      });
  };

  return (
    <div className="header container">
      <div className="header-text-wrapper">
        <TituloComponente titulo={titulo} texto={subtitulo} />
        <p>{preTexto}</p>
        <span className="header-info">
          Por: {autor} <br />
          Publicado em: {dataPublicacao}
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
        <img src={imagemTitulo || TitleImage} alt="Imagem de Título" />
      </div>
    </div>
  );
};

export default HeaderComponent;
