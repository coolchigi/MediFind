import React from 'react';
import './App.css';
import HealthcareProviderFetcher from './components/HealthcareProviderFetcher';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Login } from "../src/pages/Login";

import { Routes, Route } from "react-router-dom";
import "./styles/styles.css"
import FormCheckout from './ui-components/FormCheckout';
import NavBarHeader2 from './ui-components/NavBarHeader2';

function App() {
  const { user, signOut } = useAuthenticator();

  if (user) {
    return (
      <div className="App">
        <main>
          <NavBarHeader2 onSignOut={signOut} />
          <h1>Welcome to MediFind {user.username}</h1>
          <Routes>
            <Route path="/create" element={<FormCheckout />} />
            <Route path="/home" element={<HealthcareProviderFetcher />} />
          </Routes>
          {/* <FormCheckout /> */}
        </main>
      </div>
    );

  }

  return <Login />;

}

export default App