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
          <p>Sou estudante de Tecnologia da Informação, à procura de de estágio para aplicar meus conhecimentos. Tenho habilidades em Design Thinking e um grande interesse em contribuir de forma significativa para o crescimento e inovação da empresa, colaborando para o desenvolvimento de soluções eficazes e criativas.</p>
          <p>Além disso, possuo anos de experiência com produção audiovisual, trabalhando com ferramentas renomadas como Adobe Photoshop e Adobe Premiere Pro, o que me permite integrar design visual e narrativas criativas aos projetos em que atuo. Essa expertise combina habilidades técnicas e artísticas, agregando valor em projetos que demandam versatilidade e excelência. <br /> <br /> &lt; <i>Texto Provisório</i> &gt;</p>       
        </div>
      </div>
      <div className="img-container">
      <img src={profile} alt="Imagem de Luiz Felipe" />
      </div>
    </div>
  );
}

export default SobreComponent;


