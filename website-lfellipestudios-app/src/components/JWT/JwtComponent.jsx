import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../Context/AuthContext.jsx';
import './JwtComponent.css';

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated, logout } = useAuth(); // Corrigido aqui

  const formRef = React.useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthenticate();
  };

  const handleAuthenticate = async () => {
    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos');
      return;
    }
  
    setIsLoading(true);
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Credenciais inválidas');
      }
  
      localStorage.setItem('authToken', data.token);
      setIsAuthenticated(true);
      setIsOpen(false);
      
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      setError(error.message.includes('Failed to fetch') 
        ? 'Erro de conexão com o servidor' 
        : error.message);
    } finally {
      setIsLoading(false);
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
      {!isAuthenticated ? (
        <button 
          className="auth-button" 
          onClick={() => setIsOpen(true)}
          aria-label="Abrir modal de autenticação"
        >
          <span>Autenticar</span>
        </button>
      ) : (
        <button 
          className="logout-button" 
          onClick={logout}
          aria-label="Fazer logout"
        >
          <span>Sair</span>
        </button>
      )}

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
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              {error && (
                <span className={`error-message ${error.includes('conexão') ? 'communication-error' : ''}`}>
                  {error}
                </span>
              )}
              <button 
                type="submit" 
                className="login-button" 
                disabled={isLoading}
              >
                {isLoading ? 'Autenticando...' : 'Entrar'}
              </button>
              <button 
                type="button" 
                className="close-button" 
                onClick={handleClose}
              >
                Fechar
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AuthModal;