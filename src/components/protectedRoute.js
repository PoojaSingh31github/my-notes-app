import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = () => {
        return !!localStorage.getItem('token'); 
    };

    return isAuthenticated() ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
