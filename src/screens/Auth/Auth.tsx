import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import Register from './Register/Register';
import Login from './Login/Login';

import { authAutoSignIn } from '../../../store/actions/authActions';

import { connect } from 'react-redux';

interface AuthScreenState {
  authMode: string;
}

interface AuthScreenProps {
  authAutoSignIn: () => void;
}

class AuthScreen extends React.Component<AuthScreenProps, AuthScreenState> {
  public state: AuthScreenState = {
    authMode: 'login'
  };

  public componentDidMount = () => this.props.authAutoSignIn();

  public switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'register' : 'login'
      };
    });
  };

  public render() {
    let authScreen = <Login toggleRegister={this.switchAuthModeHandler} />;

    if (this.state.authMode === 'register') {
      authScreen = <Register toggleLogin={this.switchAuthModeHandler} />;
    }

    return <Container>{authScreen}</Container>;
  }
}

export default connect(
  null,
  { authAutoSignIn }
)(AuthScreen);
