import React from 'react';
import Logout from '../authentication/logout.js';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Welcome to the Notes App!</h1>
            <Logout /> {/* Logout button */}
        </div>
    );
};

export default Home;
