import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { vsFetch } from '../actions';

class VitalsList extends Component {
  componentWillMount() {
    this.props.vsFetch();
  }

  render() {
    return (
      <View>
        <Text>Vitals</Text>
      </View>
    );
  }
}

export default connect(null, { vsFetch })(VitalsList);
