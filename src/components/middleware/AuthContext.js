<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token"); 
        if (token) {
          setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
      }, []);

    // Login function
    const login = (token) => {
        sessionStorage.setItem("token", token);  
        setIsAuthenticated(true);
      };

      const logout = () => {
        sessionStorage.removeItem("token"); 
        setIsAuthenticated(false);
        navigate("/login");
      };

      if (isAuthenticated === null) { 
        return <div></div>;
      }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
=======
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token"); 
        if (token) {
          setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
      }, []);

    // Login function
    const login = (token) => {
        sessionStorage.setItem("token", token);  
        setIsAuthenticated(true);
      };

      const logout = () => {
        sessionStorage.removeItem("token"); 
        setIsAuthenticated(false);
        navigate("/login");
      };

      if (isAuthenticated === null) { 
        return <div></div>;
      }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
