import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Vitals from './components/Vitals';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => console.log('add vital sign!')}
          rightTitle="Add" 
          key="vitals" 
          component={Vitals} 
          title="Vital Signs" 
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
