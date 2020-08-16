import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Metrix} from '../../config';
import {Icon} from 'native-base';
export const Button = ({
  text,
  onPress,
  height,
  width,
  rounded,
  icon,
  color,
  isDisabled,
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        height: rounded
          ? Metrix.HorizontalSize(height)
          : Metrix.VerticalSize(height),
        width: Metrix.HorizontalSize(width),
        borderRadius: Metrix.HorizontalSize(
          rounded ? height / 2 : Metrix.Radius,
        ),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={Metrix.ActiveOpacity}>
      {icon ? (
        <Icon
          name={icon}
          style={{
            fontSize: Metrix.customFontSize(20),
            color: colors.text,
          }}
        />
      ) : (
        <Text style={{color: colors.text}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
