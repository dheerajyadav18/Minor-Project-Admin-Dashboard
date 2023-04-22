import React from 'react';
import ReactDOM from 'react-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import AppsContextState from "../src/Context/AppsContextState";
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLeUx0RWFab19wflFPal1VVBYiSV9jS31TdEdmW31bcnFUQWNVVg==');
registerLicense('@32302e342e30GXhAnp7HY4iSBEYbg5o9NyyYm4/+3PyFWWUtge1P02w=');

ReactDOM.render(
    <AppsContextState>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AppsContextState>,
  document.getElementById('root'),
);
