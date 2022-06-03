import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import './index.css';
import { connect, Provider } from "react-redux";
import store from './store/store';

// new REACT 18 syntax.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><App /></Provider>);
