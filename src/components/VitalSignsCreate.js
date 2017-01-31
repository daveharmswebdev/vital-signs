import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Label } from './common';

class VitalSignsCreate extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Label label="Blood Pressure" />
          </CardSection>
          <CardSection>
            <Input
              label="SP"
              placeholder="big number" 
            />
          </CardSection>
          <CardSection>
            <Input
              label="DP"
              placeholder="little number"
            />
          </CardSection>

          <CardSection>
            <Button>Save</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default VitalSignsCreate;
