import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './JwtComponent.css';

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Add form ref
  const formRef = React.useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Add form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleAuthenticate();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleAuthenticate = () => {
    if (username && password) {
      fetch('http://localhost:5000/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            localStorage.setItem('authToken', data.token);
            console.log('Autenticado com sucesso!');
            setIsOpen(false);
          } else {
            setError('Usuário ou senha inválidos');
          }
        })
        .catch(error => {
          console.error('Erro ao autenticar:', error);
          setError('Erro de comunicação com o servidor');
        });
    } else {
      setError('Por favor, preencha todos os campos');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setError('');
    setUsername('');
    setPassword('');
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="titleauth">
                <h1>Autenticação</h1>
                <span>A autenticação requer acesso autorizado</span>
              </div>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={handleUsernameChange}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && (
                <span className={`error-message ${error.includes('comunicação') ? 'communication-error' : ''}`}>
                  {error}
                </span>
              )}
              <button type="submit" className="login-button">Entrar</button>
              <button type="button" className="close-button" onClick={handleClose}>Fechar</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AuthModal;