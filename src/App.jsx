import React from 'react';
import './App.css';
import HealthcareProviderFetcher from './components/HealthcareProviderFetcher';

import { useAuthenticator, withAuthenticator, Button } from '@aws-amplify/ui-react';

import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { SignInHeader } from "./pages/SignInHeader";
import { SignInFooter } from "./pages/SignInFooter";

import "./styles/styles.css"
import FormCheckout from './ui-components/FormCheckout';
import NavBarHeader2 from './ui-components/NavBarHeader2';



function App({ signOut, user }) {
  return (
    <div className="App">

      <main>
        <NavBarHeader2 onSignOut={signOut} />
        <h1>Welcome to MediFind {user.username}</h1>
        <HealthcareProviderFetcher />
        {/* <FormCheckout /> */}
      </main>
    </div>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
