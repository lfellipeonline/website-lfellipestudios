import React, { useEffect, useState } from 'react'
import './SobreComponent.css';
import profile from '../../assets/profile.jpg';

const SobreComponent = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <div className={`sobre container ${sticky ? 'sobre-background' : ''}`}>
      <div className="sobre-int">
        <div className="texto">
          <h1>Sobre Mim</h1>
          <p>Sou estudante de Tecnologia da Informação e estou em busca de uma oportunidade de estágio para aplicar meus conhecimentos e contribuir com soluções criativas e inovadoras. Tenho habilidades em Design Thinking, que me permitem desenvolver projetos eficazes e centrados nas necessidades dos usuários, agregando valor ao crescimento da empresa.</p>
          <p><br />Além disso, possuo experiência em produção audiovisual, trabalhando com ferramentas renomadas como Adobe Photoshop e Premiere Pro. Essa combinação de habilidades técnicas e criativas me capacita a integrar design visual e narrativas envolventes aos projetos, entregando resultados de alta qualidade e impacto. <br /> <br /> &lt; <i>Texto Provisório</i> &gt;</p>       
        </div>
      </div>
      <div className="img-container">
      <img src={profile} alt="Imagem de Luiz Felipe" />
      </div>
    </div>
  );
}

export default SobreComponent;


