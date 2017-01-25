import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Card, Input, Button } from './common';
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

        <CardSection>
          <Button onPress={this.onButtinPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  
  return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passWordChanged, loginUser })(LoginForm);
