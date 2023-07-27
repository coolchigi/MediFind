import React from 'react';
import './App.css';
import HealthcareProviderFetcher from './components/HealthcareProviderFetcher';

import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';

import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { SignInHeader } from "./pages/SignInHeader";
import { SignInFooter } from "./pages/SignInFooter";

import "./styles/styles.css"


function App({ signOut, user }) {
  return (
    <div className="App">
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
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
