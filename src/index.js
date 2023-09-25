// This is the entry point of the React application.
// It imports the necessary dependencies, including the main App component,
// and renders the application inside the root element.
// Author: [Your Name]
// Date: [Current Date]
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';

// Create a root element to render the application into.
const root = createRoot(document.getElementById('root'));

// Render the App component within a React Strict Mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (performance metrics) for the application.
reportWebVitals();
