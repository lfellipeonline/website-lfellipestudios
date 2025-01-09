import React from "react";
import "./IconesComponente.css";
import noicon from "../../../assets/portifolionoimage.png";

const IconesComponente = () => {
  return (
    <div className="icon-slider">
      <div className="icon-slide">
        <div className="projectinfo">
          <img src={noicon} alt="noicon" />
          <div>
            <h3>Nome do Projeto</h3>
            <span>Descrição do Projeto</span>
          </div>
        </div>
        <p>Descrição Detalhada do Projeto.</p>
      </div>
    </div>
  );
};

export default IconesComponente;
