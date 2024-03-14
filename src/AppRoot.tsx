import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
// import AppNavigator from './AppNavigator';
// import Toast from './components/Toast';
// import { toastRef } from './util/action';

const AppRoot: React.FC = () => {
  return (
      <NavigationContainer>
        <Text>Test</Text>
        {/* <AppNavigator /> */}
      </NavigationContainer>
  );
};

export default AppRoot;
