// import React from 'react';
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
    return (
        <BrowserRouter>
            {/* <NavBar></NavBar> */}
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/About" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
