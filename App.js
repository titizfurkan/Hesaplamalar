import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native'

import Main from './navigation/Main';

export default () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Main />
    </NavigationContainer>
  );
};