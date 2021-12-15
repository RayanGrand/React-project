import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { createContext } from 'react';

const userContext = createContext('null');

function App() {
    return (
        <Router>
            <userContext.Provider value='null'>
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
