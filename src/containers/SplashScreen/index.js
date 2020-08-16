import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Metrix, Images} from '../../config';
import {useTheme} from '@react-navigation/native';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 1500);
  }, []);
  return (
    <View
      style={{
        height: Metrix.VerticalSize(),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: Metrix.HorizontalSize(300),
          width: Metrix.HorizontalSize(300),
        }}>
        <Image source={Images.logo} style={{height: '100%', width: '100%'}} />
      </View>
    </View>
  );
};
