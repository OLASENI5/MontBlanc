import './index.css'; // Import Tailwind CSS styles
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

// Render the App component within React Strict Mode
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
