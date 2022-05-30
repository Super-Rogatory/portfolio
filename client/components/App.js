import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
// React Router v6.
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<FrontPage />} />
            </Routes>
        </Router>
    )
}

export default App;