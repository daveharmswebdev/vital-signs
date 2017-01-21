import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDBGsD79n3V1KNSvqSYMhK_cFt0m-dKdCs',
      authDomain: 'personalvitalsigns.firebaseapp.com',
      databaseURL: 'https://personalvitalsigns.firebaseio.com',
      storageBucket: 'personalvitalsigns.appspot.com',
      messagingSenderId: '447978014897'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
