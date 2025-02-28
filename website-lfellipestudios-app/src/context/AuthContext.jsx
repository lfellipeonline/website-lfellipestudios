import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para validar o token
  const validateToken = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const response = await fetch('http://localhost:5000/api/validateToken', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        console.error('Erro ao validar token:', error);
        localStorage.removeItem('authToken');
      }
    }
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        setIsAuthenticated,
        validateToken,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};