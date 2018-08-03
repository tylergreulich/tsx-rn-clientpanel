import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { getTestData } from './store/actions/testActions';
import { registerUser } from './store/actions/authActions';

interface AppProps {
  getTestData: () => any;
  registerUser: (userData: object) => any;
  testMessage: {
    data: any[];
  };
  error: any[];
}

interface AppState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  errors: object;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  public componentDidMount() {
    this.props.getTestData();
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  public onRegisterUserHandler = () => {
    const { username, email, password, confirmPassword } = this.state;
    const userData = {
      username,
      email,
      password,
      confirmPassword
    };
    this.props.registerUser(userData);
    this.setState({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  public onUsernameHandler = (val: string): void => {
    this.setState({
      username: val
    });
  };

  public onPasswordHandler = (val: string): void => {
    this.setState({ password: val });
  };

  public onEmailHandler = (val: string): void => {
    this.setState({ email: val });
  };

  public onConfirmPasswordHandler = (val: string): void => {
    this.setState({ confirmPassword: val });
  };

  public render() {
    const { testMessage } = this.props;
    const { errors } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Open up App.ts to start working on your app!</Text>
        </TouchableOpacity>
        <Text>Shake your phone to open the developer menu.</Text>
        <View>
          <Text>
            {testMessage
              ? Object.keys(testMessage.data).map(
                  (index: any) => testMessage.data[index]
                )
              : 'False'}
          </Text>
        </View>
        <TextInput
          placeholder={'Email'}
          style={styles.inputStyles}
          onChangeText={this.onEmailHandler}
          value={this.state.email}
        />
        <TextInput
          placeholder={'Username'}
          style={styles.inputStyles}
          onChangeText={this.onUsernameHandler}
          value={this.state.username}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.inputStyles}
          onChangeText={this.onPasswordHandler}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TextInput
          placeholder={'Confirm Password'}
          style={styles.inputStyles}
          onChangeText={this.onConfirmPasswordHandler}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <View>
          <Button onPress={this.onRegisterUserHandler} title="Register" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyles: {
    width: '80%'
  }
});

const mapStateToProps = (state: any) => ({
  testMessage: state.test,
  errors: state.error
});

export default connect(
  mapStateToProps,
  { getTestData, registerUser }
)(App);
