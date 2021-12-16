import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { createContext } from 'react';

export const userContext = createContext(null);

function App() {
    const token = '';
    return (
        <Router>
            <userContext.Provider value={token}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </userContext.Provider>
        </Router>
    );
}

export default App;
