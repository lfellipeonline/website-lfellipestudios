import React from 'react'
import './BodyComponent.css'

const BodyComponent = ({paragrafoUm, paragrafoDois}) => {
  return (
    <div className="body-materia container">
        <p>{paragrafoUm}</p>
        <p>{paragrafoDois}</p>
    </div>
  )
}

export default BodyComponent