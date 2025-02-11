<<<<<<< HEAD
// Modified ProtectedRoute
import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children}) => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
=======
// Modified ProtectedRoute
import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children}) => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
