import React from 'react';
import ReactDOM from 'react-dom';
import AppsContextState from "../src/Context/AppsContextState";
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLeUx0RWFab19wflFPal1VVBYiSV9jS31TdEdmW31bcnFUQWNVVg==');
registerLicense('@32302e342e30GXhAnp7HY4iSBEYbg5o9NyyYm4/+3PyFWWUtge1P02w=');

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
