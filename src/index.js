import React from 'react';
import ReactDOM from 'react-dom';
import AppsContextState from "../src/Context/AppsContextState";
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
  <AppsContextState>
    <ContextProvider>
      <App />
    </ContextProvider>
    </AppsContextState>
  </React.StrictMode>,
  document.getElementById('root'),
);
