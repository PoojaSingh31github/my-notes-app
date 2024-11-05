// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/users/login', {
                email,
                password,
            });

            // Save token to localStorage
            localStorage.setItem('token', response.data.token);
            navigate('/home'); // Redirect to home page
        } catch (err) {
            setError('Invalid email or password');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>
                <p className="text-center text-gray-600 text-xs mt-4">
                    Dont have account ? <a href="/register" className="text-blue-500 hover:text-blue-800">signup</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
