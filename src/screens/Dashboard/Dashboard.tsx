import * as React from 'react';
import { Container, Content, Text } from 'native-base';

import { connect } from 'react-redux';

interface DashboardProps {
  auth: {
    isAuthenticated: boolean;
    user: {
      email: string;
    };
  };
}

class DashboardScreen extends React.Component<DashboardProps, {}> {
  public render() {
    return (
      <Container>
        <Text onPress={() => alert(this.props.auth.isAuthenticated)}>
          Dashboard
        </Text>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(DashboardScreen);
