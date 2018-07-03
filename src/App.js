import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Container } from './components/common';
import { LoginForm } from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCP8kEBW5O_R7hQrwmRgzvfZYqeVt-oBQo',
      authDomain: 'auth-267f7.firebaseapp.com',
      databaseURL: 'https://auth-267f7.firebaseio.com',
      projectId: 'auth-267f7',
      storageBucket: 'auth-267f7.appspot.com',
      messagingSenderId: '911254057301'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Container>
              <Button buttonText={'Log Out'} onPress={() => firebase.auth().signOut()} />
          </Container>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner />;
    }
}

  render() {
    return (
      <View>
      <Header headerText={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
