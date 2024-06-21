import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import * as React from 'react';
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
