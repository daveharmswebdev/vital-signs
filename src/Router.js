import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Vitals from './components/Vitals';
import VitalSignsCreate from './components/VitalSignsCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.vsCreate()}
          rightTitle="Add" 
          key="vitals" 
          component={Vitals} 
          title="Vital Signs" 
          initial
        />
        <Scene key="vsCreate" component={VitalSignsCreate} title="New Vital Signs" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
