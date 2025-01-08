import React from 'react';
import './TituloComponente.css';

function TituloComponente({ titulo, texto }) {
  return (
    <main className='texto'>
      <h1>{titulo}</h1>
      <p>{texto}</p>
    </main>
  );
}

export default TituloComponente;