import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import FrontPage from "./FrontPage";
import Project from "./Project";
import Contact from "./Contact";

// React Router v6.
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
