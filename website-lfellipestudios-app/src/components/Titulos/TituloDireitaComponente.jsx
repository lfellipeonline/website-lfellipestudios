import React from 'react';
import styles from './TituloDireitaComponente.module.css';

function TituloDireitaComponente(props) {
  return (
    <div className={styles.tituloBase}>
      <h1>{props.titulo}</h1>
      <span>{props.texto}</span>
    </div>
  );
}

export default TituloDireitaComponente;