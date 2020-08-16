/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Root} from 'native-base';
import {MainStack} from './src/stacks/MainStack';
import Colors from './src/config/colors';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Root>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.colors.card}
      />
      <NavigationContainer theme={Colors}>
        <MainStack />
      </NavigationContainer>
    </Root>
  );
};

export default App;
