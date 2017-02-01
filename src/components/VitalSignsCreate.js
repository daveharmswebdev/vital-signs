import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vsUpdate, vsCreate } from '../actions';
import { Card, CardSection, Input, Button, Label } from './common';

class VitalSignsCreate extends Component {
  onButtonPress() {
    const { sp, dp, pulse } = this.props;

    console.log('onButtonPress', sp, dp, pulse);

    this.props.vsCreate({ sp, dp, pulse });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Label label="Blood Pressure" />
        </CardSection>
        <CardSection>
          <Input
            label="SP"
            placeholder="big number" 
            value={this.props.sp}
            onChangeText={value => this.props.vsUpdate({ prop: 'sp', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="DP"
            placeholder="little number"
            value={this.props.dp}
            onChangeText={value => this.props.vsUpdate({ prop: 'dp', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Pulse"
            placeholder="pulse"
            value={this.props.pulse}
            onChangeText={value => this.props.vsUpdate({ prop: 'pulse', value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { sp, dp, pulse } = state.vsForm;

  return { sp, dp, pulse };
};

export default connect(mapStateToProps, { vsUpdate, vsCreate })(VitalSignsCreate);
