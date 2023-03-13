import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='YOUR DOMAIN IN AUTH0 DASHBOARD' clientId='YOUR CLIENT ID IN AUTH0' >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
// DOMAIN = dev-1mpnsdsd4are671.us.auth0.com CLIENT ID = Ji7VemuddassaSVOI5f5dSSADL1gIPO57
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
