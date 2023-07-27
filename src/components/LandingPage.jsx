import React from 'react';
import '../App.css';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';

import { Header } from "../pages/Header";
import { Footer } from "../pages/Footer";
import { SignInHeader } from "../pages/SignInHeader";
import { SignInFooter } from "../pages/SignInFooter";

import '@aws-amplify/ui-react/styles.css';

import "../styles/styles.css"

function LandingPage({ signOut, user }) {

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );

}

export default withAuthenticator(LandingPage, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
