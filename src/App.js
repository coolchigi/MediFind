import logo from './logo.svg';
import './App.css';

import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App( {signOut}) {
  return (
    <View className='App'>
      <Card>
        <Image src={logo} className="App-logo" alt='logo'></Image>
        <Heading level={1}>Welcome to Amplify!</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </Card>
    </View>
  );

}

export default withAuthenticator(App);
