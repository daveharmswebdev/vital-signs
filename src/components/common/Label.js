import React from 'react';
import { View, Text } from 'react-native';

const Label = ({ label }) => {
  return (
    <View style={styles.labelStyle}>
      <Text style={styles.textStyle}>
        {label}
      </Text>
    </View>
  );
};

const styles = {
  labelStyle: {
    alignItems: 'center',
    paddingLeft: 20,
    flex: 1
  },
  textStyle: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
  }
};

export { Label };
