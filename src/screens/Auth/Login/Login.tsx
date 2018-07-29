import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Form } from 'native-base';

import Input from '../../../Input/Input';

import { connect } from 'react-redux';
import { loginUser } from '../../../../store/actions/authActions';

interface LoginState {
  email: string;
  password: string;
  errors: {
    email?: string | null;
    password?: string | null;
  };
}

interface LoginProps {
  loginUser: (userData: object, startMainTabs: () => void) => void;
  toggleRegister: () => void;
}

class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    email: '',
    password: '',
    errors: {
      email: null,
      password: null
    }
  };

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  public onLoginHandler = (startMainTabs: any) => {
    const { email, password } = this.state;

    const userData = {
      email,
      password
    };

    this.props.loginUser(userData, startMainTabs);
  };

  public changeEmailHandler = (value: string) => {
    this.setState({ email: value });
  };

  public changePasswordHandler = (value: string) => {
    this.setState({ password: value });
  };

  public render() {
    const { email, password, errors } = this.state;

    return (
      <Container style={styles.authContainer}>
        <Content contentContainerStyle={styles.contentContainer}>
          <Text style={{ textAlign: 'center' }}>Please Login</Text>
          <Input
            placeholder={errors.email ? errors.email : 'Email'}
            value={email}
            onChangeText={this.changeEmailHandler}
            error={errors.email ? true : false}
          />
          <Input
            placeholder={errors.password ? errors.password : 'Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={this.changePasswordHandler}
            error={errors.password ? true : false}
          />
          <Button onPress={this.onLoginHandler} style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>Login</Text>
          </Button>
          <Button
            onPress={this.props.toggleRegister}
            style={styles.buttonStyles}
          >
            <Text style={styles.buttonTextStyles}>Switch to Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  authContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  contentContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyles: {
    width: '100%',
    marginTop: 15
  },
  buttonTextStyles: {
    width: '100%',
    textAlign: 'center'
  }
});

const mapStateToProps = (state: any) => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
