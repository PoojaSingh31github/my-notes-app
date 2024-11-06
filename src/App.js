import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/authentication/login.js";
import ProtectedRoute from "./components/protectedRoute.js";
import Logout from "./components/authentication/logout.js";
// import Home from "./components/home/login.js";
import Register from "./components/authentication/resgister.js";
import HomePage from "./components/notes/notesHome.js";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    
                    <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                    
                    <Route path="/logout" element={<Logout />} />

                    <Route path="/register" element={<Register />} />
                    
                    <Route path="*" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
