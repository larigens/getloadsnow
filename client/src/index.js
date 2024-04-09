import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.js';
import reportWebVitals from './reportWebVitals.js';
import TagManager from 'react-gtm-module';
import { HelmetProvider } from 'react-helmet-async';

TagManager.initialize({
  gtmId: 'GTM-PXPN3PBQ'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
