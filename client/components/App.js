import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import FrontPage from './FrontPage';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';

// React Router v6.
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<FrontPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume.pdf" element={<Resume />} />
            </Routes>
        </Router>
    )
}

export default App;