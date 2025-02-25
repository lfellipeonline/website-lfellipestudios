import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './JwtComponent.css';

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleTokenChange = (e) => {
    setToken(e.target.value);
    setError(''); // Limpa o erro quando o usuário começa a digitar
  };

  const handleAuthenticate = () => {
    if (token) {
      // Envia o token para o back-end para validação
      fetch('http://localhost:5000/api/authenticate', {  // URL do back-end
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),  // Envia o token como payload
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Se o back-end responder que o token é válido, armazene o JWT
            localStorage.setItem('authToken', data.token);  // Armazena o JWT no localStorage
            console.log('Token autenticado com sucesso!');
            setIsOpen(false); // Fecha o modal após autenticação
          } else {
            setError('Token de autenticação inválido');
          }
        })
        .catch(error => {
          console.error('Erro ao autenticar:', error);
          setError('Erro de comunicação com o servidor');
        });
    } else {
      setError('Por favor, insira um token de autenticação');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setError(''); // Limpa o erro ao fechar o modal
    setToken(''); // Limpa o valor do input ao fechar o modal
  };

  return (
    <div className="auth-container">
      <button className="auth-button" onClick={() => setIsOpen(true)}>
        <span>Autenticar</span>
      </button>

      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="titleauth">
              <h1>Autenticação</h1>
              <span>A autenticação requer acesso autorizado</span>
            </div>
            <input
              type="text"
              placeholder="Digite seu token"
              value={token}
              onChange={handleTokenChange}
            />
            {error && (
              <span className={`error-message ${error.includes('comunicação') ? 'communication-error' : ''}`}>
                {error}
              </span>
            )}
            <button className="login-button" onClick={handleAuthenticate}>Logar</button>
            <button className="close-button" onClick={handleClose}>Fechar</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AuthModal;
