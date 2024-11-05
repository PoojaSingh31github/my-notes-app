import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token
        navigate('/login'); // Redirect to login page
    };

    return (
        <button 
            onClick={handleLogout} 
            className="mt-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
            Logout
        </button>
    );
};

export default Logout;
