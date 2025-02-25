import React from 'react'
import './FooterComponente.css'
import AuthModal from '../JWT/JwtComponent'

const FooterComponente = () => {
  return (
    <div className="footer">
        <p>© 2025 lfellipestudios. Todos os direitos reservados.</p>
        <ul>
            <li><span><AuthModal /></span></li>
        </ul>
    </div>
  )
}

export default FooterComponente