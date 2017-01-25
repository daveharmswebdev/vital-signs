import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Input, Button, Spinner } from './common';
import { emailChanged, passWordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passWordChanged(text);
  }

  onButtinPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtinPress.bind(this)}>
        Log In
      </Button>
    );
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="you@domain.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passWordChanged, loginUser })(LoginForm);
