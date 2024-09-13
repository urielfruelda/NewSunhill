import './index.css';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root container and render the App component
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="21363748727-nmlbctqonc29vvnjg3fvi00vama5nkrm.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
