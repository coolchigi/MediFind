import React from 'react';
import { Amplify } from 'aws-amplify';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AmplifyProvider, ThemeProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { BrowserRouter  } from "react-router-dom";


import config from './aws-exports';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
    <ThemeProvider theme={studioTheme}>
      <Authenticator.Provider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Authenticator.Provider>
    </ThemeProvider>
    </AmplifyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
