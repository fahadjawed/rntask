import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {GlobalStack} from './GlobalStack';
export const MainStack = () => {
  const MainStack = createStackNavigator();
  const AppStacks = [...GlobalStack];
  return (
    <MainStack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {AppStacks.map((stack) => (
        <MainStack.Screen {...stack} />
      ))}
    </MainStack.Navigator>
  );
};
