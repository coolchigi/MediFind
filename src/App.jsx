import React from 'react';
import './App.css';
import HealthcareProviderFetcher from './components/HealthcareProviderFetcher';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Login } from "../src/pages/Login";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.css"
import FormCheckout from './ui-components/FormCheckout';
import NavBarHeader2 from './ui-components/NavBarHeader2';
import EditProvider from './ui-components/EditProvider';

function App() {
  const { user, signOut } = useAuthenticator();

  if (user) {
    return (
      <div className="App">
        <main>
          <NavBarHeader2 onSignOut={signOut} />
          <Routes>
            <Route path="/" element={<HealthcareProviderFetcher />} />
            <Route path="/create" element={<FormCheckout />} />
            <Route path="/edit" element={<EditProvider />} />
          </Routes>
          {/* <FormCheckout /> */}
        </main>
      </div>
    );

  }

  return <Login />;

}

export default App