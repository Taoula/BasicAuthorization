import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          
          .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/weak-password') {
              this.setState({ error: 'Please choose a stronger password', loading: false });
            } else {
              this.setState({ error: 'Incorrect Email or Password', loading: false });
            }
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button buttonText={'Log In'} onPress={this.onButtonPress.bind(this)} />;
}

  render() {
  return (

    <Card>

      <CardSection>
        <Input
          placeholder={'johndoe@gmail.com'}
          label={'Email'}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder={'Password'}
          label={'Password'}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{this.state.error}</Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
  );
 }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  }
};

export { LoginForm };
