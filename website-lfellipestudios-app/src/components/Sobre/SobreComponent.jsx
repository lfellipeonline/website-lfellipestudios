import React, { useEffect, useState } from 'react'
import './SobreComponent.css';
import profile from '../../assets/profile.jpg';
import TituloComponente from '../Titulos/TituloComponente';

const SobreComponent = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <div className="sobre container sobre-backgorund">
      <div className="sobre-int">
        <div className="texto">
          <TituloComponente titulo="Sobre"/>
          <p>Sou estudante de Análise e Desenvolvimento de Sistemas na UNINASSAU, com foco primário em Front-End, Design UX/UI, Design Thinking e JavaScript. Minha jornada acadêmica é complementada por uma paixão por criar experiências digitais inovadoras e intuitivas, sempre considerando as necessidades dos usuários e as melhores práticas do mercado.</p>
          <p>Além disso, possuo anos de experiência com produção audiovisual, trabalhando com ferramentas renomadas como Adobe Photoshop e Adobe Premiere Pro, o que me permite integrar design visual e narrativas criativas aos projetos em que atuo. Essa expertise combina habilidades técnicas e artísticas, agregando valor em projetos que demandam versatilidade e excelência.</p>       
        </div>
      </div>
      <img src={profile} alt="Imagem de Luiz Felipe" />
    </div>
  );
}

export default SobreComponent;


