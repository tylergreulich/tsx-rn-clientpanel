import * as React from 'react';
import { Container, Content, Text } from 'native-base';

import { connect } from 'react-redux';

class AddClientScreen extends React.Component {
  public render() {
    return (
      <Container>
        <Text>Add Client</Text>
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
)(AddClientScreen);
