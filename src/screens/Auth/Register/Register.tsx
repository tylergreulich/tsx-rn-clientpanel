import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Form } from 'native-base';

import Input from '../../../Input/Input';

import { connect } from 'react-redux';
import { registerUser } from '../../../../store/actions/authActions';

import startMainTabs from '../MainTabs/startMainTabs';

import {
  RegisterProps,
  RegisterState
} from '../../../../interfaces/Register/register.interface';

class Register extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    errors: {
      email: null,
      username: null,
      password: null,
      confirmPassword: null
    }
  };

  public componentDidUpdate(prevState: any) {
    if (prevState.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  public onRegisterHandler = () => {
    const { email, username, password, confirmPassword } = this.state;

    const userData = {
      email,
      username,
      password,
      confirmPassword
    };

    this.props.registerUser(userData);
  };

  public changeEmailHandler = (value: string) => {
    this.setState({ email: value });
  };

  public changeUsernameHandler = (value: string) => {
    this.setState({ username: value });
  };

  public changePasswordHandler = (value: string) => {
    this.setState({ password: value });
  };

  public changeConfirmPasswordHandler = (value: string) => {
    this.setState({ confirmPassword: value });
  };

  public render() {
    const {
      email,
      username,
      password,
      confirmPassword,
      errors
    }: RegisterState = this.state;

    return (
      <Container style={styles.authContainer}>
        <Content contentContainerStyle={styles.contentContainer}>
          <Text style={{ textAlign: 'center' }}>Please Register</Text>
          <Input
            placeholder={errors.username ? errors.username : 'Username'}
            value={username}
            onChangeText={this.changeUsernameHandler}
            error={errors.username ? true : false}
          />
          <Input
            placeholder={errors.email ? errors.email : 'Email'}
            secureTextEntry={true}
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
          <Input
            placeholder={
              errors.confirmPassword
                ? errors.confirmPassword
                : 'Confirm Password'
            }
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={this.changeConfirmPasswordHandler}
            error={errors.confirmPassword ? true : false}
          />
          <Button onPress={this.onRegisterHandler} style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>Register</Text>
          </Button>
          <Button onPress={this.props.toggleLogin} style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>Switch to Login</Text>
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
  { registerUser }
)(Register);
