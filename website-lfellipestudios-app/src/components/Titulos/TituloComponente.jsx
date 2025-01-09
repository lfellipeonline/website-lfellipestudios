import React from 'react';
import styles from './TituloComponente.module.css';

function TituloComponente(props) {
  return (
    <div className={styles.tituloBase}>
      <h1>{props.titulo}</h1>
      <span>{props.texto}</span>
    </div>
  );
}

export default TituloComponente;