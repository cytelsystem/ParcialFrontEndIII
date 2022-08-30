import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from '../src/App';

const contenedor = document.getElementById('root');

const root = ReactDOM.createRoot(contenedor);
root.render(<App />);