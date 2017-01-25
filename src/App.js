import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
