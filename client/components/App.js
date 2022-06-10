import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import FrontPage from "./FrontPage";
import Project from "./Project";
import Contact from "./Contact";
import MediaQuery from "react-responsive";
import MobileFullPage from "./MobileFullPage";

// React Router v6.
function App() {
    return (
        <Router>
            <MediaQuery maxWidth={768}>
                <Routes>
                    <Route path="/" element={<MobileFullPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>                
            </MediaQuery>
            <MediaQuery minWidth={769}>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </MediaQuery>
        </Router>
    );
}

export default App;
