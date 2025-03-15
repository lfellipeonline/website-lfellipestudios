import React from 'react';
import styles from './TituloDireitaComponente.module.css';

function TituloDireitaComponente(props) {
  return (
    <div className={styles.tituloBase}>
      <h2>{props.titulo}</h2>
      <span>{props.texto}</span>
    </div>
  );
}

export default TituloDireitaComponente;